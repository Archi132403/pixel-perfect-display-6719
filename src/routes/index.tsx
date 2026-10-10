import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, ChevronDown, CircleArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const workflows = [
  {
    number: "01",
    title: "Run surveys without chasing every response",
    short: "Listening, on a steadier rhythm.",
    body: "Set recurring surveys, schedule them in advance, and use reminders to keep each cycle moving. Bring feedback together for a clearer view of what employees are saying.",
    tasks: ["Pulse survey · Q2", "Reminder · 12 people", "Feedback themes · Ready"],
    result: "A listening rhythm your team can sustain.",
  },
  {
    number: "02",
    title: "Give performance reviews a repeatable process",
    short: "A clear path through every cycle.",
    body: "Bring structure to assessments with review templates and reminders. Make it easier for people and managers to understand what is expected at each step of the cycle.",
    tasks: ["Self review · In progress", "Manager review · Up next", "Cycle reminder · Scheduled"],
    result: "A review cycle with fewer loose ends.",
  },
  {
    number: "03",
    title: "Move from feedback to clear next steps",
    short: "Good feedback, put to work.",
    body: "Turn what you hear into action plans, assign responsibilities, and keep progress visible. The follow-through stays connected to the feedback that prompted it.",
    tasks: ["Feedback theme · Workload", "Owner · People team", "Next step · In progress"],
    result: "Feedback with a next step attached.",
  },
];

const comparisonRows = [
  {
    label: "Recurring employee surveys",
    thrive: "Scheduled surveys, recurring cycles, and automated reminders.",
    culture: "Employee surveys with engagement benchmarking options.",
  },
  {
    label: "Performance reviews",
    thrive: "Review templates, structured assessments, and reminders.",
    culture: "Performance reviews, goals, development, and AI coaching.",
  },
  {
    label: "Turning feedback into action",
    thrive: "Action plans with responsibilities and progress tracking.",
    culture: "Action planning and tools to support follow-through.",
  },
  {
    label: "Recognition and rewards",
    thrive: "Kudos peer recognition, points, leaderboards, and rewards.",
    culture: "Recognition through Shoutouts.",
  },
  {
    label: "Engagement benchmarking",
    thrive: "Ask about benchmark availability for your program and plan.",
    culture: "Employee engagement benchmarking is offered.",
  },
  {
    label: "Pricing and packaging",
    thrive: "Advertised annual-billing rates shown below; confirm inclusions.",
    culture: "Ask the vendor about current pricing and package fit.",
  },
];

const questions = [
  {
    question: "Does ThriveSparrow replace an existing HR system?",
    answer:
      "It is positioned around employee engagement and performance workflows, rather than as a replacement for every HR system. Ask the vendor how it fits with your HRIS and existing tools.",
  },
  {
    question: "Can both products manage engagement and performance?",
    answer:
      "Yes. Both products support employee engagement and performance work. Their specific tools, plan inclusions, and fit for your organization are worth comparing in a live walkthrough.",
  },
  {
    question: "Can ThriveSparrow automate every HR task?",
    answer:
      "No single platform should be assumed to automate every HR task. ThriveSparrow describes automation for recurring surveys, reminders, reporting, and parts of performance workflows; confirm the details against your processes.",
  },
  {
    question: "How should we decide which product fits our organization?",
    answer:
      "Map your must-have workflows, integrations, reporting needs, and team capacity. Then ask each vendor to demonstrate those exact scenarios and confirm pricing, implementation, and plan inclusions in writing.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ThriveSparrow vs Culture Amp | Less admin. More people." },
      {
        name: "description",
        content:
          "A thoughtful comparison of ThriveSparrow and Culture Amp for employee surveys, performance reviews, feedback, recognition, and pricing.",
      },
      { property: "og:title", content: "ThriveSparrow vs Culture Amp | Less admin. More people." },
      {
        property: "og:description",
        content:
          "Compare employee engagement and performance workflows to find the right fit for your people team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [activeWorkflow, setActiveWorkflow] = useState(0);
  const workflow = workflows[activeWorkflow];

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="ThriveSparrow comparison home">
          <span className="wordmark-mark" aria-hidden="true">t</span>
          <span>ThriveSparrow</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#top">Overview</a>
          <a href="#workflows">Workflows</a>
          <a href="#comparison">Comparison</a>
          <a href="#stories">Customer stories</a>
          <a href="#faqs">FAQs</a>
        </nav>
        <Button asChild className="nav-cta">
          <a href="https://www.thrivesparrow.com/demo" target="_blank" rel="noreferrer">
            Book a demo <ArrowUpRight aria-hidden="true" />
          </a>
        </Button>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> ThriveSparrow <span>vs</span> Culture Amp</p>
          <h1>Less admin.<br /><em>More people.</em></h1>
          <p className="hero-lede">
            Your HR team&apos;s time is better spent supporting employees than chasing survey responses,
            coordinating reviews, and pulling together reports.
          </p>
          <p className="hero-subcopy">
            See how ThriveSparrow approaches everyday employee engagement and performance work—and
            how it compares with Culture Amp.
          </p>
          <div className="hero-actions">
            <Button asChild size="lg" className="button-main">
              <a href="https://www.thrivesparrow.com/demo" target="_blank" rel="noreferrer">
                See ThriveSparrow in action <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="button-secondary">
              <a href="#comparison">Explore the comparison <ArrowDown aria-hidden="true" /></a>
            </Button>
          </div>
          <div className="hero-note"><span>For people teams</span><span>200–1,000 employees</span></div>
        </div>

        <div className="workflow-visual" aria-label="A scattered set of people-team tasks organized into a workflow">
          <div className="visual-topline"><span>THE WEEK, RECONNECTED</span><span className="visual-status"><i /> In motion</span></div>
          <div className="task-cloud">
            <div className="task-chip chip-survey"><span className="task-icon survey-icon">S</span><span>Survey reminders</span><span className="task-count">08</span></div>
            <div className="task-chip chip-reviews"><span className="task-icon review-icon">R</span><span>Review cycle</span><span className="task-count">04</span></div>
            <div className="task-chip chip-report"><span className="task-icon report-icon">↗</span><span>Pull a report</span><span className="task-count">02</span></div>
            <div className="task-chip chip-followup"><span className="task-icon followup-icon">↻</span><span>Follow-ups</span><span className="task-count">11</span></div>
            <div className="workflow-connector" aria-hidden="true"><span>↓</span></div>
          </div>
          <div className="organized-card">
            <div className="organized-heading"><span className="organized-check">✓</span><span>One connected rhythm</span><ArrowUpRight aria-hidden="true" /></div>
            <div className="flow-track">
              <div><span className="flow-number">01</span><span>Listen</span></div><span className="flow-line" />
              <div><span className="flow-number">02</span><span>Review</span></div><span className="flow-line" />
              <div><span className="flow-number">03</span><span>Act</span></div>
            </div>
            <p>More room for the conversations that matter.</p>
          </div>
          <span className="visual-caption">Less chasing, more follow-through.</span>
        </div>
        <a className="hero-scroll" href="#friction"><span>↓</span> The people behind the process</a>
      </section>

      <section className="friction-section section-pad" id="friction">
        <div className="section-kicker"><span>01</span><span>The familiar busywork</span></div>
        <div className="friction-layout">
          <h2>The people part of HR shouldn&apos;t get lost in the paperwork.</h2>
          <div className="friction-copy">
            <p>One more survey to send. Another review cycle to coordinate. A spreadsheet to update before the leadership meeting.</p>
            <p>None of these tasks is unnecessary. But when every step needs manual follow-up, it&apos;s easy for the process to take more attention than the people it&apos;s meant to support.</p>
          </div>
        </div>
        <div className="friction-list" aria-label="Common people-team tasks">
          <div><span className="friction-index">A</span><span>Survey follow-ups</span><span className="friction-dash">—</span></div>
          <div><span className="friction-index">B</span><span>Review coordination</span><span className="friction-dash">—</span></div>
          <div><span className="friction-index">C</span><span>Reporting and manual data work</span><span className="friction-dash">—</span></div>
        </div>
      </section>

      <section className="workflows-section section-pad" id="workflows">
        <div className="section-kicker"><span>02</span><span>A steadier way to work</span></div>
        <div className="section-heading-row">
          <h2>Spend less time keeping processes moving.</h2>
          <p>ThriveSparrow brings structure and automation to recurring employee engagement and performance work.</p>
        </div>
        <div className="workflow-experience">
          <div className="workflow-tabs" role="tablist" aria-label="Explore people workflows">
            {workflows.map((item, index) => (
              <button
                className={`workflow-tab${activeWorkflow === index ? " is-active" : ""}`}
                key={item.number}
                id={`workflow-tab-${item.number}`}
                type="button"
                role="tab"
                aria-selected={activeWorkflow === index}
                aria-controls="workflow-panel"
                onClick={() => setActiveWorkflow(index)}
              >
                <span>{item.number}</span><strong>{item.short}</strong><ArrowRight aria-hidden="true" />
              </button>
            ))}
          </div>
          <div className="workflow-panel" role="tabpanel" id="workflow-panel" aria-labelledby={`workflow-tab-${workflow.number}`}>
            <div className="workflow-panel-copy">
              <p className="panel-kicker">Workflow {workflow.number}</p>
              <h3>{workflow.title}</h3>
              <p>{workflow.body}</p>
              <div className="panel-result"><span>THE OUTCOME</span><strong>{workflow.result}</strong></div>
            </div>
            <div className="mini-board">
              <div className="mini-board-head"><span>PEOPLE OPERATIONS</span><span>THIS CYCLE <ChevronDown aria-hidden="true" /></span></div>
              <div className="mini-board-title">A little more in sync <span>↗</span></div>
              <div className="mini-board-steps">
                {workflow.tasks.map((task, index) => (
                  <div className="mini-task" key={task}><span className={`mini-task-marker marker-${index + 1}`}>{index === 2 ? "✓" : `0${index + 1}`}</span><span>{task}</span><ArrowUpRight aria-hidden="true" /></div>
                ))}
              </div>
              <div className="mini-board-foot"><span className="pulse-dot" /> A clear next step, for everyone.</div>
            </div>
          </div>
          <p className="workflow-footnote">Illustrative workflow. Specific features and plan availability should be confirmed with ThriveSparrow.</p>
        </div>
      </section>

      <section className="proof-section section-pad" id="stories">
        <div className="proof-mark" aria-hidden="true">“</div>
        <div className="proof-content">
          <p className="section-kicker"><span>03</span><span>A customer-reported outcome</span></p>
          <h2>Less time compiling feedback.<br /><em>More time to understand it.</em></h2>
          <div className="proof-number"><strong>70%</strong><span>less manual feedback-related work</span></div>
          <p className="proof-description">Dyninno reported reducing manual feedback-related work after centralizing employee surveys and automating reporting through ThriveSparrow.</p>
          <p className="proof-disclaimer">Customer-reported outcome published by ThriveSparrow. Not a direct comparison with Culture Amp.</p>
          <a className="text-link" href="https://www.thrivesparrow.com/customers/dyninno" target="_blank" rel="noreferrer">Read Dyninno&apos;s story <ArrowUpRight aria-hidden="true" /></a>
        </div>
        <div className="proof-stamp"><span>PEOPLE<br />FIRST</span><i>✳</i></div>
      </section>

      <section className="comparison-section section-pad" id="comparison">
        <div className="section-kicker"><span>04</span><span>Side by side</span></div>
        <div className="section-heading-row comparison-heading">
          <h2>ThriveSparrow vs Culture Amp: what matters to your HR team?</h2>
          <p>Both platforms support employee engagement and performance. The better fit depends on your team&apos;s priorities.</p>
        </div>
        <div className="comparison-wrap" role="region" aria-label="Product comparison table" tabIndex={0}>
          <table className="comparison-table">
            <thead><tr><th scope="col">What to compare</th><th scope="col"><span className="table-brand brand-thrive"><i>t</i> ThriveSparrow</span></th><th scope="col"><span className="table-brand brand-culture"><i>c</i> Culture Amp</span></th></tr></thead>
            <tbody>{comparisonRows.map((row) => <tr key={row.label}><th scope="row">{row.label}</th><td>{row.thrive}</td><td>{row.culture}</td></tr>)}</tbody>
          </table>
        </div>
        <p className="comparison-note">A high-level guide, not an exhaustive feature audit. Product capabilities and availability can vary by plan and change over time; confirm details directly with each vendor.</p>
      </section>

      <section className="reviews-section section-pad" id="reviews">
        <div className="section-kicker"><span>05</span><span>What customers say</span></div>
        <div className="section-heading-row">
          <h2>The features are one thing. The everyday experience is another.</h2>
          <p>Selected customer-review themes offer another lens—not a universal verdict on either platform.</p>
        </div>
        <div className="review-columns">
          <article className="review-column review-thrive">
            <h3><span className="review-logo">t</span> ThriveSparrow</h3>
            <div className="review-theme"><span>APPRECIATED</span><p>Ease of administering surveys</p><p>Structured performance-review processes</p><p>Connected employee-engagement workflows</p></div>
            <div className="review-theme review-caveat"><span>ALSO MENTIONED</span><p>Reporting and export customization limitations</p><p>Some integration constraints</p><p>Occasional workflow friction</p></div>
          </article>
          <article className="review-column review-culture">
            <h3><span className="culture-logo">c</span> Culture Amp</h3>
            <div className="review-theme"><span>APPRECIATED</span><p>Research-backed surveys and benchmarking</p><p>Detailed engagement analytics</p><p>Integrated talent and performance tools</p></div>
            <div className="review-theme review-caveat"><span>ALSO MENTIONED</span><p>Some reviewers note navigation complexity</p><p>Lengthy performance forms in particular workflows</p><p>Concerns about packaging and renewal costs</p></div>
          </article>
        </div>
        <p className="review-source">Selected review themes, not universal platform limitations. Based on <a href="https://www.g2.com/products/thrivesparrow/reviews" target="_blank" rel="noreferrer">ThriveSparrow reviews on G2 <ArrowUpRight aria-hidden="true" /></a> and <a href="https://www.g2.com/products/culture-amp/reviews" target="_blank" rel="noreferrer">Culture Amp reviews on G2 <ArrowUpRight aria-hidden="true" /></a>.</p>
      </section>

      <section className="recognition-section section-pad" id="recognition">
        <div className="recognition-symbol" aria-hidden="true"><span>✳</span></div>
        <div className="recognition-copy"><p className="section-kicker"><span>06</span><span>A smaller thing, with a big feeling</span></p><h2>Make time for the moments that matter.</h2><p>ThriveSparrow Kudos gives teammates a way to recognize one another. Peer recognition, points, leaderboards, and redeemable rewards can bring the everyday contributions into view.</p><a className="text-link" href="https://www.thrivesparrow.com/pricing" target="_blank" rel="noreferrer">Explore ThriveSparrow plans <ArrowUpRight aria-hidden="true" /></a></div>
        <div className="recognition-note"><span>NOTICE IT.</span><span>SAY IT.</span><span>CELEBRATE IT.</span></div>
      </section>

      <section className="pricing-section section-pad" id="pricing">
        <div className="section-kicker"><span>07</span><span>Buying considerations</span></div>
        <div className="section-heading-row pricing-heading"><h2>Find the setup that fits your team.</h2><p>Advertised ThriveSparrow annual-billing rates per employee. Use as a starting point, not a final quote.</p></div>
        <div className="price-list">
          <div className="price-row"><span className="price-name"><i className="price-dot price-dot-coral" /> Kudos</span><span className="price-value"><strong>$2</strong><small>/ employee / month</small></span><span className="price-annotation">Recognition &amp; rewards</span></div>
          <div className="price-row"><span className="price-name"><i className="price-dot price-dot-blue" /> Engage</span><span className="price-value"><strong>$3</strong><small>/ employee / month</small></span><span className="price-annotation">Employee engagement</span></div>
          <div className="price-row"><span className="price-name"><i className="price-dot price-dot-ink" /> Performance</span><span className="price-value"><strong>$5</strong><small>/ employee / month</small></span><span className="price-annotation">Performance workflows</span></div>
        </div>
        <p className="pricing-disclaimer">Annual-billing rates shown as advertised in this comparison brief. Confirm current pricing, plan inclusions, eligibility, and terms directly with ThriveSparrow. Actual pricing may vary; module prices are not added together here.</p>
        <a className="text-link" href="https://www.thrivesparrow.com/pricing" target="_blank" rel="noreferrer">See current pricing from ThriveSparrow <ArrowUpRight aria-hidden="true" /></a>
      </section>

      <section className="faq-section section-pad" id="faqs">
        <div className="section-kicker"><span>08</span><span>Good questions to ask</span></div>
        <div className="faq-layout"><h2>Before you choose.</h2><div className="faq-list">{questions.map((item, index) => <details className="faq-item" key={item.question} open={index === 0}><summary><span>{item.question}</span><span className="faq-icon"><ChevronDown aria-hidden="true" /></span></summary><p>{item.answer}</p></details>)}</div></div>
      </section>

      <section className="final-cta section-pad" id="demo">
        <p className="section-kicker"><span>ONE LAST THING</span></p>
        <h2>Your next review cycle doesn&apos;t have to feel like your last.</h2>
        <p>See how ThriveSparrow brings employee surveys, performance reviews, and follow-ups into more structured workflows.</p>
        <Button asChild size="lg" className="button-main final-button"><a href="https://www.thrivesparrow.com/demo" target="_blank" rel="noreferrer">See ThriveSparrow in action <CircleArrowRight aria-hidden="true" /></a></Button>
        <span className="cta-footnote">A conversation about your team, your way of working.</span>
      </section>

      <footer className="site-footer">
        <a className="wordmark" href="#top"><span className="wordmark-mark" aria-hidden="true">t</span><span>ThriveSparrow</span></a>
        <span>A thoughtful comparison for people teams.</span>
        <a href="#top" className="back-top">Back to top ↑</a>
      </footer>
    </main>
  );
}