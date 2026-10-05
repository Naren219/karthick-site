// Progressive enhancements: all content and section links work without this file.
document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.classList.add('js');
    const tamil = document.documentElement.lang === 'ta';
    const labels = tamil ? {
        openMenu: 'வழிசெலுத்தல் பட்டியலைத் திறக்கவும்',
        closeMenu: 'வழிசெலுத்தல் பட்டியலை மூடவும்',
        copied: 'தொலைபேசி எண் நகலெடுக்கப்பட்டது!',
        copyFailed: 'நகலெடுக்க முடியவில்லை. மேலே உள்ள தொலைபேசி எண்ணைத் தேர்ந்தெடுத்து நகலெடுக்கவும்.'
    } : {
        openMenu: 'Open navigation menu',
        closeMenu: 'Close navigation menu',
        copied: 'Phone number copied!',
        copyFailed: 'Could not copy. Select and copy the phone number shown above.'
    };

    document.querySelectorAll('.region-switch a[data-country]').forEach(link => {
        link.addEventListener('click', () => {
            const secure = location.protocol === 'https:' ? '; Secure' : '';
            document.cookie = `nf_country=${link.dataset.country}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`;
        });
    });

    const navbar = document.querySelector('.navbar');
    const toggle = document.querySelector('.mobile-menu-toggle');
    const menu = document.querySelector('.nav-links');
    const navLinks = [...document.querySelectorAll('.nav-link')];
    const mobile = matchMedia('(max-width: 1000px)');
    const background = [...document.querySelectorAll('main, footer, .nav-brand, .skip-link')];

    const updateHeaderHeight = () => {
        document.documentElement.style.setProperty('--header-height', `${navbar.offsetHeight + 16}px`);
    };
    new ResizeObserver(updateHeaderHeight).observe(navbar);

    const setMenuOpen = (open, restoreFocus = false) => {
        // Move focus before making the menu inert when closing it.
        if (!open && restoreFocus) toggle.focus();
        toggle.classList.toggle('active', open);
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? labels.closeMenu : labels.openMenu);
        menu.classList.toggle('active', open);
        menu.inert = mobile.matches && !open;
        document.body.classList.toggle('menu-open', open);
        background.forEach(element => { element.inert = open; });
        if (open) navLinks[0].focus();
    };

    toggle.addEventListener('click', () => {
        setMenuOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobile.matches) setMenuOpen(false);
            // Keep native hash navigation, including browser history and target focus.
            setActiveLink(link);
        });
    });
    mobile.addEventListener('change', () => {
        const focusInsideMenu = menu.contains(document.activeElement);
        setMenuOpen(false, mobile.matches && focusInsideMenu);
    });
    document.addEventListener('keydown', event => {
        if (toggle.getAttribute('aria-expanded') !== 'true') return;
        if (event.key === 'Escape') {
            event.preventDefault();
            setMenuOpen(false, true);
        } else if (event.key === 'Tab') {
            const focusable = [toggle, ...navLinks];
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        }
    });
    setMenuOpen(false);

    function setActiveLink(activeLink) {
        navLinks.forEach(link => {
            link.classList.toggle('active', link === activeLink);
            if (link === activeLink) link.setAttribute('aria-current', 'location');
            else link.removeAttribute('aria-current');
        });
    }
    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const link = navLinks.find(link => link.hash === `#${entry.target.id}`);
            if (link) setActiveLink(link);
        });
    }, { rootMargin: '-20% 0px -65% 0px' });
    document.querySelectorAll('main > section[id]').forEach(section => sectionObserver.observe(section));

    const status = document.querySelector('#copy-status');
    let statusTimeout;
    document.querySelector('.copy-btn').addEventListener('click', async () => {
        let message;
        try {
            await navigator.clipboard.writeText('+91 9944516052');
            message = labels.copied;
        } catch {
            message = labels.copyFailed;
        }
        clearTimeout(statusTimeout);
        status.textContent = message;
        statusTimeout = setTimeout(() => { status.textContent = ''; }, 6000);
    });
});
