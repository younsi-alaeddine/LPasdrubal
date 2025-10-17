import '@testing-library/jest-dom';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      refresh: jest.fn(),
    };
  },
  useSearchParams() {
    return new URLSearchParams();
  },
  usePathname() {
    return '/';
  },
}));

// Mock next-intl
jest.mock('next-intl', () => ({
  useTranslations: () => (key) => key,
  useLocale: () => 'fr',
  useMessages: () => ({}),
}));

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: 'div',
    span: 'span',
    button: 'button',
    img: 'img',
    section: 'section',
    article: 'article',
    header: 'header',
    footer: 'footer',
    nav: 'nav',
    main: 'main',
    aside: 'aside',
    ul: 'ul',
    li: 'li',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    p: 'p',
    a: 'a',
    form: 'form',
    input: 'input',
    textarea: 'textarea',
    select: 'select',
    option: 'option',
    label: 'label',
    fieldset: 'fieldset',
    legend: 'legend',
    table: 'table',
    thead: 'thead',
    tbody: 'tbody',
    tr: 'tr',
    th: 'th',
    td: 'td',
  },
  AnimatePresence: ({ children }) => children,
  useAnimation: () => ({
    start: jest.fn(),
    stop: jest.fn(),
    set: jest.fn(),
  }),
  useInView: () => ({
    ref: jest.fn(),
    inView: true,
  }),
}));

// Mock lucide-react
jest.mock('lucide-react', () => ({
  Menu: () => <div data-testid="menu-icon" />,
  X: () => <div data-testid="close-icon" />,
  Globe: () => <div data-testid="globe-icon" />,
  ChevronDown: () => <div data-testid="chevron-down-icon" />,
  ChevronLeft: () => <div data-testid="chevron-left-icon" />,
  ChevronRight: () => <div data-testid="chevron-right-icon" />,
  Play: () => <div data-testid="play-icon" />,
  Send: () => <div data-testid="send-icon" />,
  Mail: () => <div data-testid="mail-icon" />,
  Phone: () => <div data-testid="phone-icon" />,
  MapPin: () => <div data-testid="map-pin-icon" />,
  Clock: () => <div data-testid="clock-icon" />,
  User: () => <div data-testid="user-icon" />,
  Users: () => <div data-testid="users-icon" />,
  FileText: () => <div data-testid="file-text-icon" />,
  CheckCircle: () => <div data-testid="check-circle-icon" />,
  CreditCard: () => <div data-testid="credit-card-icon" />,
  UserPlus: () => <div data-testid="user-plus-icon" />,
  Calendar: () => <div data-testid="calendar-icon" />,
  GraduationCap: () => <div data-testid="graduation-cap-icon" />,
  Shield: () => <div data-testid="shield-icon" />,
  Activity: () => <div data-testid="activity-icon" />,
  Trophy: () => <div data-testid="trophy-icon" />,
  Target: () => <div data-testid="target-icon" />,
  Award: () => <div data-testid="award-icon" />,
  TrendingUp: () => <div data-testid="trending-up-icon" />,
  Users2: () => <div data-testid="users2-icon" />,
  BookOpen: () => <div data-testid="book-open-icon" />,
  Sports: () => <div data-testid="sports-icon" />,
  Palette: () => <div data-testid="palette-icon" />,
  Music: () => <div data-testid="music-icon" />,
  Code: () => <div data-testid="code-icon" />,
  Car: () => <div data-testid="car-icon" />,
  Bus: () => <div data-testid="bus-icon" />,
  UtensilsCrossed: () => <div data-testid="utensils-crossed-icon" />,
  Heart: () => <div data-testid="heart-icon" />,
  Download: () => <div data-testid="download-icon" />,
  Eye: () => <div data-testid="eye-icon" />,
  ArrowRight: () => <div data-testid="arrow-right-icon" />,
  Search: () => <div data-testid="search-icon" />,
  Filter: () => <div data-testid="filter-icon" />,
  Tag: () => <div data-testid="tag-icon" />,
  Grid: () => <div data-testid="grid-icon" />,
  List: () => <div data-testid="list-icon" />,
  Image: () => <div data-testid="image-icon" />,
  Navigation: () => <div data-testid="navigation-icon" />,
  Bell: () => <div data-testid="bell-icon" />,
  Settings: () => <div data-testid="settings-icon" />,
  LogIn: () => <div data-testid="log-in-icon" />,
}));

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Suppress console warnings in tests
const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Warning: ReactDOM.render is no longer supported')
    ) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});
