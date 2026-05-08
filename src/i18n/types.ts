export interface Translations {
  site: {
    title: string
  }
  nav: {
    home: string
    services: string
    whyUs: string
    process: string
    contact: string
    changeLanguage: string
  }
  hero: {
    title: string
    subTitle: string
    titleHighlight: string
    description: string
    primaryCta: string
    secondaryCta: string
    scrollIndicatorLabel: string
    badge: string
    meta: {
      years: { value: string; label: string }
      projects: { value: string; label: string }
      sectors: { value: string; label: string }
    }
  }
  services: {
    sectionTitle: string
    sectionDescription: string
    learnMore: string
    software: {
      title: string
      description: string
      icon: string
    }
    strategy: {
      title: string
      description: string
      icon: string
    }
    infrastructure: {
      title: string
      description: string
      icon: string
    }
  }
  whyUs: {
    sectionTitle: string
    sectionDescription: string
    statsValue: string
    statsLabel: string
    imageAlt: string
    tailoredSolutions: {
      title: string
      description: string
    }
    sustainableGrowth: {
      title: string
      description: string
    }
    closeSupport: {
      title: string
      description: string
    }
  }
  process: {
    eyebrow: string
    sectionTitle: string
    sectionDescription: string
    phases: Array<{
      stage: string
      title: string
      bullets: string[]
    }>
  }
  contact: {
    sectionTitle: string
    sectionDescription: string
    nameLabel: string
    emailLabel: string
    messageLabel: string
    namePlaceholder: string
    emailPlaceholder: string
    messagePlaceholder: string
    submitText: string
  }
  footer: {
    privacyPolicy: string
    termsAndConditions: string
    socialLink: string
    copyright: string
  }
}