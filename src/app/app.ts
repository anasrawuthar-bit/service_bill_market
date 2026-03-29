import { Component } from '@angular/core';

type NavLink = {
  label: string;
  href: string;
};

type Metric = {
  value: string;
  label: string;
};

type Feature = {
  eyebrow: string;
  title: string;
  description: string;
};

type SellingPoint = {
  title: string;
  description: string;
};

type Step = {
  title: string;
  description: string;
};

type ContactCard = {
  label: string;
  value: string;
  hint: string;
  href?: string;
};

type ScreenShot = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly brand = 'Service Billing';
  protected readonly companyName = 'GI Hostings';
  protected readonly demoUrl = 'https://servicedemo.gihostings.in';
  protected readonly navLinks: NavLink[] = [
    { label: 'Overview', href: '#overview' },
    { label: 'Features', href: '#features' },
    { label: 'Screens', href: '#screens' },
    { label: 'Contact', href: '#contact' }
  ];
  protected readonly metrics: Metric[] = [
    { value: '1', label: 'connected workflow for jobs, billing, stock, and updates' },
    { value: '0', label: 'WhatsApp API fees when using your Electron QR bridge' },
    { value: '24/7', label: 'client status access from a simple public link' },
    { value: '3', label: 'clear workspaces for staff, technicians, and customers' }
  ];
  protected readonly features: Feature[] = [
    {
      eyebrow: 'Front desk',
      title: 'Fast job intake with better client confidence',
      description:
        'Capture device details, issue notes, customer data, and receipt flow without switching between tools.'
    },
    {
      eyebrow: 'Technician flow',
      title: 'Assignment, checklist, and work tracking',
      description:
        'Let technicians update notes, service steps, and status while staff keep full operational visibility.'
    },
    {
      eyebrow: 'Billing',
      title: 'Service billing that stays connected to inventory',
      description:
        'Parts sales, invoice flow, and stock movement stay in sync so the business view stays accurate.'
    },
    {
      eyebrow: 'Client experience',
      title: 'A status page customers can open anytime',
      description:
        'Reduce repetitive calls by letting customers track progress, receipts, and bill information themselves.'
    },
    {
      eyebrow: 'Reporting',
      title: 'Team, financial, and feedback visibility',
      description:
        'Turn the product into a management system, not just a billing form, with reports that show real value.'
    },
    {
      eyebrow: 'Communication',
      title: 'Electron + WhatsApp Web QR friendly by design',
      description:
        'Market the product as easier to roll out because it works with your existing Electron WhatsApp QR setup.'
    }
  ];
  protected readonly sellingPoints: SellingPoint[] = [
    {
      title: 'Sell the complete workflow, not only the billing screen',
      description:
        'The landing page explains intake, assignment, client updates, billing, and stock as one operational system.'
    },
    {
      title: 'Make your WhatsApp setup a strength',
      description:
        'Because you already use Electron with QR login, you can say there is no Business API complexity to manage.'
    },
    {
      title: 'Show prospects what their customers get',
      description:
        'Client status pages and branded documents make the value visible even to non-technical buyers.'
    },
    {
      title: 'Keep the page ready for demos and direct outreach',
      description:
        'This structure works for hosted demos, WhatsApp sharing, sales calls, and portfolio links.'
    }
  ];
  protected readonly workflow: Step[] = [
    {
      title: 'Show the problem',
      description: 'Repair teams usually juggle ticket tracking, billing, and updates across separate tools.'
    },
    {
      title: 'Present the product',
      description: 'This platform combines service operations, customer tracking, and billing into one workflow.'
    },
    {
      title: 'Open the live demo',
      description: 'Guide the client through intake, technician updates, billing, inventory, and status access.'
    },
    {
      title: 'Close with simple contact options',
      description: 'End with a direct path to call, WhatsApp, or open the hosted demo again.'
    }
  ];
  protected readonly fitSegments: string[] = [
    'Computer and laptop service centers',
    'Mobile and electronics repair shops',
    'Multi-staff billing counters',
    'Repair businesses that need stock and service tracking together'
  ];
  protected readonly screenshots: ScreenShot[] = [
    {
      eyebrow: 'Operations view',
      title: 'Public home and entry point',
      description:
        'Use the main screen to introduce the workflow, explain the product, and push visitors toward the live demo or support flow.',
      image: '/screenshots/home-screen.png'
    },
    {
      eyebrow: 'Customer experience',
      title: 'Client ticket tracking flow',
      description:
        'This screen helps prospects understand that customers can directly check service progress instead of repeatedly calling the shop.',
      image: '/screenshots/client-login-screen.png'
    },
    {
      eyebrow: 'Staff access',
      title: 'Dedicated staff login experience',
      description:
        'A separate login path reinforces that the product supports internal team workflows, not only public billing pages.',
      image: '/screenshots/staff-login-screen.png'
    }
  ];
  protected readonly contacts: ContactCard[] = [
    {
      label: 'Live demo',
      value: 'Open hosted demo',
      hint: 'Replace the demo URL in app.ts with your real hosted link.',
      href: this.demoUrl
    },
    {
      label: 'Call',
      value: '+91 95672 27005',
      hint: 'Use this for direct demo scheduling.',
      href: 'tel:+919567227005'
    },
    {
      label: 'WhatsApp',
      value: '+91 95672 27005',
      hint: 'Works well as the final CTA after demo calls.',
      href: 'https://wa.me/919567227005'
    },
    {
      label: 'Website',
      value: 'gihostings.com',
      hint: 'Swap this with your brand site if needed.',
      href: 'https://gihostings.com'
    }
  ];
  protected readonly faqs: FaqItem[] = [
    {
      question: 'Do we need WhatsApp API for this product?',
      answer:
        'No. Since your current delivery uses Electron with WhatsApp Web QR login, the marketing site can position that as a lower-friction rollout model.'
    },
    {
      question: 'Why create the marketing site separately in Angular?',
      answer:
        'A separate Angular site is good when you want a dedicated branded landing page, independent hosting, and freedom to iterate without touching the main app.'
    },
    {
      question: 'Can real screenshots be added later?',
      answer:
        'Yes. The screen section is already structured like a showcase, so you can replace the mockup blocks with real screenshots anytime.'
    },
    {
      question: 'Can this page be used for portfolio and client demos?',
      answer:
        'Yes. It is designed to work both as a polished portfolio page and as a practical product page for demo sharing.'
    }
  ];
}
