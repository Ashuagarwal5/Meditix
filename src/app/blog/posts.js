import pharmacy from "../../assets/homeHero.webp";
import inventory from "../../assets/homeInsights.jpg";
import team from "../../assets/aboutWhoWeAre.webp";
import operations from "../../assets/aboutHero.webp";

export const posts = [
  {
    slug: "a-smarter-pharmacy-starts-here",
    category: "Pharmacy operations",
    title: "A smarter pharmacy starts with a simpler workflow.",
    description:
      "Less time on repetitive tasks. More time for the people who matter. A practical guide to bringing your pharmacy operations together.",
    image: pharmacy,
    readTime: 5,
    sections: [
      [
        "Start with the everyday friction",
        "Walk through a typical order with your team, from receiving a prescription to completing a sale. Note where information is entered twice, where someone has to wait, and where a paper record needs to be checked. These small interruptions are a useful starting point for improving your workflow.",
      ],
      [
        "Give every task a clear home",
        "Create a consistent process for receiving stock, reviewing orders, billing, and handling returns. Assign an owner to each step and document what completion looks like. A shared checklist helps the team handle busy periods without relying on memory.",
      ],
      [
        "Connect your information",
        "When choosing software, look at how inventory, sales, and purchasing records connect. Ask for a demonstration using your own everyday scenarios, including a partial delivery or a returned item. Your team should be able to follow a transaction without switching between disconnected records.",
      ],
      [
        "Improve one step at a time",
        "Try the new workflow with a small group before expanding it. Track practical signals such as time spent finding stock or correcting entries. Review feedback with staff and adjust the process before adding more changes.",
      ],
    ],
  },
  {
    slug: "inventory-that-works-for-you",
    category: "Inventory",
    title: "From stock checks to stock confidence",
    description:
      "Build a more consistent routine for tracking batches, reviewing expiry dates, and planning your next order.",
    image: inventory,
    readTime: 4,
    sections: [
      [
        "Make receiving a reliable routine",
        "Compare each delivery with the purchase order before putting items away. Record the quantity, batch details, and expiry dates where relevant. Investigate differences immediately so they do not become harder to explain later.",
      ],
      [
        "Review little and often",
        "Schedule small, regular stock checks instead of relying only on occasional full counts. Start with frequently sold items and products with repeated discrepancies. Keep a record of adjustments and their reasons.",
      ],
      [
        "Use movement to guide purchasing",
        "Review recent sales alongside available stock and supplier lead times. Treat suggested reorder quantities as a starting point for a staff review, especially when demand is seasonal. Build an expiry review into that same routine.",
      ],
    ],
  },
  {
    slug: "a-better-billing-workflow",
    category: "Digital tools",
    title: "Make everyday billing feel effortless",
    description:
      "Small workflow improvements that help your team spend less time at the billing screen.",
    image: operations,
    readTime: 3,
    sections: [
      [
        "Keep your product records tidy",
        "Consistent product names, pack sizes, and prices make items easier to find. Assign responsibility for maintaining those records and review duplicate entries before they confuse your team.",
      ],
      [
        "Practice the exceptions",
        "Train staff on more than a straightforward sale. Walk through returns, cancelled transactions, and payment failures in a practice environment. Provide a short reference guide and a clear escalation contact.",
      ],
      [
        "Close the day with confidence",
        "Set aside time to compare recorded sales with payment receipts and investigate differences. Record unresolved items for follow-up so the next shift can understand what happened.",
      ],
    ],
  },
  {
    slug: "connected-multi-branch-teams",
    category: "Business growth",
    title: "Multiple branches. One connected team.",
    description:
      "Create shared ways of working while giving each location the clarity it needs.",
    image: team,
    readTime: 4,
    sections: [
      [
        "Agree on shared definitions",
        "Use consistent product naming, reporting periods, and stock adjustment reasons across locations. Shared definitions make branch comparisons more useful and reduce time spent interpreting reports.",
      ],
      [
        "Make transfers traceable",
        "Document both dispatch and receipt when moving stock between branches. Record who is responsible at each end and have a process for resolving missing or damaged items.",
      ],
      [
        "Keep local feedback in the loop",
        "A shared process should leave room for local operating needs. Meet regularly with branch leads to discuss bottlenecks and test changes at one location before introducing them everywhere.",
      ],
    ],
  },
  {
    slug: "supplier-relationships",
    category: "Inventory",
    title: "Better purchasing starts with better visibility",
    description:
      "Bring order history, delivery notes, and supplier conversations into a clearer purchasing routine.",
    image: operations,
    readTime: 3,
    sections: [
      [
        "Keep a useful order history",
        "Record what was ordered, what arrived, and when it arrived. Include short deliveries and unresolved discrepancies so purchasing decisions reflect your actual experience.",
      ],
      [
        "Review supplier performance",
        "Look at delivery consistency and responsiveness alongside price. Discuss recurring issues using specific examples, and agree on how urgent questions will be handled.",
      ],
      [
        "Plan your next review",
        "Set a regular purchasing review with the people who handle stock every day. Their observations can explain patterns that totals alone do not reveal.",
      ],
    ],
  },
  {
    slug: "help-your-team-adopt-digital-tools",
    category: "Digital tools",
    title: "New software. A confident team. A smoother start.",
    description:
      "A people-first approach to introducing digital tools into your pharmacy.",
    image: team,
    readTime: 4,
    sections: [
      [
        "Involve the people doing the work",
        "Ask staff which tasks cause the most frustration before selecting a new tool. Include representatives from different shifts in demonstrations and record the questions they raise.",
      ],
      [
        "Train around real scenarios",
        "Organize short practice sessions around familiar tasks. Use sample data, provide clear instructions, and give people time to repeat a task without the pressure of serving a waiting customer.",
      ],
      [
        "Support the first few weeks",
        "Choose a point of contact for questions, keep a shared issue list, and review it frequently. Before switching systems, agree on how existing records will be checked and how the team will handle interruptions.",
      ],
    ],
  },
];
