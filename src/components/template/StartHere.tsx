"use client";

import React, { useEffect, useState } from "react";
import Footer from "@/components/common/Footer";
import FloatingBadge from "@/components/common/FloatingBadge";

const navItems = [
  { id: "intro", label: "Introduction" },
  { id: "styling", label: "Styling" },
  { id: "editing", label: "Editing" },
  { id: "support", label: "Support" },
];

function LoomVideoPlayer({
  imageSrc,
  title,
  views,
  duration,
  iframeSrc,
}: {
  imageSrc: string;
  title: string;
  views: string;
  duration: string;
  iframeSrc: string;
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <div
        style={{
          position: "relative",
          paddingBottom: "56.25%",
          height: 0,
          overflow: "hidden",
          borderRadius: "8px",
          margin: "16px 0 24px",
          border: "1px solid rgba(255, 49, 40, 0.2)",
        }}
      >
        <iframe
          src={`${iframeSrc}?autoplay=1`}
          frameBorder="0"
          allowFullScreen
          title={title}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    );
  }

  return (
    <div
      onClick={() => setIsPlaying(true)}
      style={{
        position: "relative",
        paddingBottom: "56.25%",
        height: 0,
        overflow: "hidden",
        borderRadius: "8px",
        margin: "16px 0 24px",
        cursor: "pointer",
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: "1px solid rgba(255, 49, 40, 0.2)",
      }}
    >
      {/* Top Bar Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          padding: "12px 18px",
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 100%)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#fff",
          fontSize: "14px",
          zIndex: 2,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontWeight: 600, fontSize: "15px" }}>{title}</span>
          <span style={{ opacity: 0.75, fontSize: "12px" }}>👁 {views}</span>
        </div>
        <div style={{ display: "flex", gap: "12px", opacity: 0.85, fontSize: "13px" }}>
          <span>🔗</span>
          <span>↗️</span>
          <span>💬 0</span>
        </div>
      </div>

      {/* Center Play Button */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "76px",
          height: "76px",
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
          zIndex: 2,
        }}
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="#1e1e1e"
          style={{ marginLeft: "4px" }}
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>

      {/* Bottom Right Duration Pill */}
      <div
        style={{
          position: "absolute",
          bottom: "16px",
          right: "16px",
          backgroundColor: "rgba(20, 20, 20, 0.85)",
          backdropFilter: "blur(4px)",
          borderRadius: "20px",
          padding: "5px 12px",
          color: "#fff",
          fontSize: "12px",
          fontWeight: 600,
          display: "flex",
          alignItems: "center",
          gap: "8px",
          zIndex: 2,
        }}
      >
        <span>⚡ 1.2x</span>
        <span style={{ opacity: 0.5 }}>|</span>
        <span>{duration}</span>
      </div>
    </div>
  );
}

export default function StartHere() {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const handleScroll = () => {
      // Check if user is scrolled near bottom of page
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80
      ) {
        setActiveSection("support");
        return;
      }

      // Check each section top position relative to viewport
      let current = navItems[0].id;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 220) {
            current = item.id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <main className="page-wrapper">
      {/* 1. Hero Template */}
      <section className="section red hero-template">
        <div className="w-layout-blockcontainer main-container w-container">
          <div className="title-wrap-template">
            <h1
              className="no-margins"
              style={{ color: "var(--color--light, #fff8eb)" }}
            >
              START HERE
            </h1>
            <div className="limit-subtitle-template">
              <div
                className="subtitle"
                style={{ color: "var(--color--light, #fff8eb)" }}
              >
                We want to offer you the best experience when working on your
                new website. Below you can find general information about editing
                Webflow sites.
              </div>
            </div>
            <div className="flex-cta-center mg-top-16">
              <a
                href="https://webflow.com/templates/html/impactstudio-agency-website-template"
                target="_blank"
                rel="noopener noreferrer"
                className="cta white w-button"
              >
                Buy template
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Content */}
      <section className="section" style={{ position: "relative" }}>
        <div className="w-layout-blockcontainer main-container w-container">
          <div
            className="columns-template-details w-row"
            style={{
              display: "flex",
              alignItems: "flex-start",
              position: "relative",
            }}
          >
            {/* Sticky Navigation */}
            <div
              className="left-column-template-details w-col w-col-4 w-col-stack"
              style={{
                position: "sticky",
                top: "100px",
                alignSelf: "flex-start",
                zIndex: 10,
              }}
            >
              <div
                className="tile-template-navigation"
                style={{
                  width: "100%",
                }}
              >
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(item.id);
                      }}
                      className={`link-template-navigation ${
                        isActive ? "w--current" : ""
                      }`}
                      style={{
                        fontSize: isActive ? "26px" : "24px",
                        fontWeight: isActive ? 500 : 400,
                        lineHeight: "135%",
                        color: "var(--color--main, #ff3128)",
                        textDecoration: "none",
                        transition: "all 0.2s ease-in-out",
                        display: "block",
                      }}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right Details Column */}
            <div
              className="right-column-template-details w-col w-col-8 w-col-stack"
              style={{ flex: 1, minWidth: 0 }}
            >
              {/* Tile 1: Introduction */}
              <div id="intro" className="tile-template-details">
                <div className="w-richtext">
                  <h2>INTRODUCTION</h2>
                  <h3>HAPPY TO HAVE YOU HERE</h3>
                  <p>
                    Whether you just bought Impact Studio Template, or are
                    simply having a look, we are happy to have you here. As you
                    might know, Futur Studio is built on Webflow - the powerful
                    no-code tool for creating websites. If you are already
                    familiar with it, I&apos;m sure editing this template will be
                    a piece of cake.
                  </p>
                  <p>
                    This documentation covers general rules of working with
                    Webflow that we thought are worth sharing.
                  </p>
                  <h3>IF YOU ARE NEW TO WEBFLOW</h3>
                  <p>
                    On the other hand, if it&apos;s your first time using Webflow,
                    you might want to have a look at{" "}
                    <a
                      href="https://university.webflow.com/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: "underline" }}
                    >
                      Webflow university
                    </a>{" "}
                    and their 101 crash course.
                  </p>
                </div>
              </div>

              {/* Tile 2: Styling */}
              <div id="styling" className="tile-template-details">
                <div className="w-richtext">
                  <h2>STYLING</h2>
                  <p>
                    Below you can find some general rules regarding styling your
                    template.
                  </p>

                  <h3>COLORS</h3>
                  <p>
                    In Impact Studio Template template we&apos;ve used Color
                    Swatches. It means that you can change color in one place,
                    and it will be applied to all the elements that share the
                    same swatch.
                    <br />
                    <br />
                    <strong>To change color swatches:</strong>
                  </p>
                  <ol role="list">
                    <li>Click on the element with the color you want to edit.</li>
                    <li>
                      In the styles tab on the right, find the color option (ex.
                      Text color)
                    </li>
                    <li>Click on the color square.</li>
                    <li>
                      Once the little pop-up opens, click the edit icon and
                      choose a new color.
                    </li>
                    <li>Click save.</li>
                  </ol>
                  <p>See the video below for mini-tutorial.</p>
                  <LoomVideoPlayer
                    imageSrc="/start-here/videoframe_9379.png"
                    title="Webflow - Gridfolio - 29 July 2022"
                    views="668 views"
                    duration="15 sec ⚡ 12 sec"
                    iframeSrc="https://www.loom.com/embed/3e795778c3f74199aa601935a79f8266"
                  />

                  <h3>FONTS</h3>
                  <p>
                    Impact Studio Template is using two additional fonts, called
                    DM Sans and Zodiak. They can be downloaded{" "}
                    <a
                      href="https://fonts.google.com/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: "underline" }}
                    >
                      Google Fonts
                    </a>
                    . These fonts are 100% free for personal and commercial use.
                  </p>
                  <p>
                    <strong>DM Sans </strong>is applied to the Body of the
                    website, and because of that, it is automatically applied to
                    all paragraphs and text blocks.{" "}
                    <strong>You can change it globally by:</strong>
                  </p>
                  <ol role="list">
                    <li>Selecting &quot;Body&quot;</li>
                    <li>
                      In the styles tab on the right, click selector and select
                      &quot;Body (All pages)&quot;
                    </li>
                    <li>
                      Scroll down to &quot;Typography&quot; and change for the
                      desired font.
                    </li>
                  </ol>
                  <p>See the video below for mini-tutorial:</p>
                  <LoomVideoPlayer
                    imageSrc="/start-here/videoframe_5377.png"
                    title="Webflow - Gridfolio - 30 July 2022"
                    views="431 views"
                    duration="12 sec ⚡ 10 sec"
                    iframeSrc="https://www.loom.com/embed/d552370902ab4d2f961a7a6dfe4a336c"
                  />

                  <p>
                    DM Sans is also applied to headings (H1-H6).{" "}
                    <strong>You can also edit them same way by:</strong>
                  </p>
                  <ol role="list">
                    <li>Selecting heading type you want to edit</li>
                    <li>
                      In the styles tab on the right, click selector and select
                      &quot;All H(1, 2, 3, 4, 5, 6) Headings&quot;
                    </li>
                    <li>
                      Scroll down to &quot;Typography&quot; and change for the
                      desired font.
                    </li>
                  </ol>

                  <h3>ICONS</h3>
                  <p>
                    All of the icons are in the .svg format, so changing the
                    Color Swatches on the website will not affect them. You can
                    download these icons from the &quot;Assets -&gt; Icons&quot;
                    tab, and edit them in your design software (Photoshop,
                    Figma, Sketch etc.). You can also upload your own icons
                    directly.
                  </p>
                </div>
              </div>

              {/* Tile 3: Editing */}
              <div id="editing" className="tile-template-details">
                <div className="w-richtext">
                  <h2>EDITING</h2>
                  <p>
                    Below you can find some general tips on editing template&apos;s
                    copy and images.
                  </p>

                  <h3>STATIC CONTENT VS. DYNAMIC CONTENT</h3>
                  <p>
                    When it comes to copy, in Webflow we distinguish two
                    different copy types - static content and dynamic content
                    (CMS).
                    <br />
                    <br />
                    To quickly distinguish these copy types you can have a look
                    in the navigator tab, where static content will be displayed
                    using white font.
                  </p>
                  <figure
                    style={{ maxWidth: "460px", margin: "16px auto" }}
                    className="w-richtext-align-fullwidth w-richtext-figure-type-image"
                  >
                    <div>
                      <img
                        src="/start-here/65beed3bc82767caefc884ab_65b99e22b11267a98f32cb93_656405dade4f2b82c163e560_6523e34df3671f2cf7b5ff35_64fe87ee6b910cb3c55ab8f5_64ca343c4134d.png"
                        alt="Static content in the navigator tab"
                        style={{ width: "100%", height: "auto", borderRadius: "4px" }}
                      />
                    </div>
                    <figcaption
                      style={{
                        fontSize: "16px",
                        color: "var(--color--main, #ff3128)",
                        marginTop: "10px",
                        textAlign: "center",
                      }}
                    >
                      Static content in the navigator tab
                    </figcaption>
                  </figure>

                  <p>And dynamic content will be displayed using purple font color.</p>
                  <figure
                    style={{ maxWidth: "460px", margin: "16px auto" }}
                    className="w-richtext-align-fullwidth w-richtext-figure-type-image"
                  >
                    <div>
                      <img
                        src="/start-here/65beed3bae4f614d14f8e1ff_65b99e22b11267a98f32cb91_656405dade4f2b82c163e55f_6523e34db7f029dac516c750_64fe87ee6b910cb3c55ab8f4_64ca343c4134d.png"
                        alt="Dynamic content in the navigator tab"
                        style={{ width: "100%", height: "auto", borderRadius: "4px" }}
                      />
                    </div>
                    <figcaption
                      style={{
                        fontSize: "16px",
                        color: "var(--color--main, #ff3128)",
                        marginTop: "10px",
                        textAlign: "center",
                      }}
                    >
                      Dynamic content in the navigator tab
                    </figcaption>
                  </figure>

                  <p>
                    You can also directly see which element is static and which
                    dynamic, by directly hovering over it in the designer space.
                    The static content will have a blue border around it.
                  </p>
                  <figure
                    style={{ maxWidth: "580px", margin: "16px auto" }}
                    className="w-richtext-align-center w-richtext-figure-type-image"
                  >
                    <div>
                      <img
                        src="/start-here/65beed3bff5fdab0f7ad579e_65b99e22b11267a98f32cb90_656405dade4f2b82c163e563_6523e34e5593534338377948_64fe87ee6b910cb3c55ab8f7_64ca343c4134d.png"
                        alt="Static content blue border"
                        style={{ width: "100%", height: "auto", borderRadius: "4px" }}
                      />
                    </div>
                    <figcaption
                      style={{
                        fontSize: "16px",
                        color: "var(--color--main, #ff3128)",
                        marginTop: "10px",
                        textAlign: "center",
                      }}
                    >
                      Static content in the designer area has blue border
                    </figcaption>
                  </figure>

                  <p>And dynamic content&apos;s border will be purple.</p>
                  <figure
                    style={{ maxWidth: "580px", margin: "16px auto" }}
                    className="w-richtext-align-center w-richtext-figure-type-image"
                  >
                    <div>
                      <img
                        src="/start-here/65beed3b490e95c8dbcd72f8_65b99e22b11267a98f32cb92_656405dade4f2b82c163e562_6523e34ec12f787d327c387f_64fe87ee6b910cb3c55ab8f8_64ca343c4134d.png"
                        alt="Dynamic content purple border"
                        style={{ width: "100%", height: "auto", borderRadius: "4px" }}
                      />
                    </div>
                    <figcaption
                      style={{
                        fontSize: "16px",
                        color: "var(--color--main, #ff3128)",
                        marginTop: "10px",
                        textAlign: "center",
                      }}
                    >
                      <em>Dynamic content has purple border in the designer area</em>
                    </figcaption>
                  </figure>

                  <h3>EDITING STATIC CONTENT</h3>
                  <p>
                    Every copy, but the CMS related one, is a static content. It
                    means that you need to edit it directly on the page.
                  </p>
                  <p>
                    <strong>You can edit static content in two ways:</strong>
                  </p>
                  <ol role="list">
                    <li>
                      In the &quot;Designer mode&quot; simply double click on
                      the text you want to edit, and change it. Webflow will
                      autosave it for you.
                    </li>
                    <li>
                      In &quot;Editor mode&quot; similarly click on the text and
                      change it.
                    </li>
                  </ol>
                  <p>
                    Check the video below to see how to edit static content in
                    the &quot;Designer mode&quot;.
                  </p>
                  <LoomVideoPlayer
                    imageSrc="/start-here/72460a3b51784d3cac34b281dee62937-00001.jpg"
                    title="Webflow - Gridfolio - 30 July 2022"
                    views="181 views"
                    duration="6 sec ⚡ 5 sec"
                    iframeSrc="https://www.loom.com/embed/72460a3b51784d3cac34b281dee62937"
                  />

                  <h3>EDITING DYNAMIC CONTENT</h3>
                  <p>
                    Editing dynamic content is very easy, but can be a little
                    confusing at the beginning. This type of content you will
                    need to edit through collections. Once you get it, it&apos;s
                    as simple as filling in the web form.
                  </p>
                  <p>
                    <strong>To edit dynamic content:</strong>
                  </p>
                  <ol role="list">
                    <li>
                      Go to CMS Collections on the left side, and find the
                      collection you want to edit (ex. Blog).
                    </li>
                    <li>
                      Click on the collection item (ex. specific blog post).
                    </li>
                    <li>
                      Change the inputs that you want to edit (ex. Blog post title)
                    </li>
                    <li>Save and it&apos;s done.</li>
                  </ol>
                  <p>
                    You can read more about editing collections and working with
                    Webflow CMS on their{" "}
                    <a
                      href="https://university.webflow.com/lesson/intro-to-dynamic-content"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: "underline" }}
                    >
                      university page
                    </a>
                    .
                  </p>

                  <h3>EDITING (STATIC) IMAGES</h3>
                  <p>
                    There&apos;s two different image types used in this template -
                    normal image and background image. You might notice that we
                    used normal images mostly for icons, and the big images are
                    implemented as a background image.
                  </p>
                  <p>
                    <strong>To edit normal image:</strong>
                  </p>
                  <ol role="list">
                    <li>Find the image you want to change and select it.</li>
                    <li>
                      In settings tab on the right click replace image and
                      choose the new one.
                    </li>
                  </ol>
                  <p>
                    <strong>To edit background image:</strong>
                  </p>
                  <ol role="list">
                    <li>
                      Find the element with the background image (ex. Section,
                      Div) and select it.
                    </li>
                    <li>
                      In styles tab, scroll down to the background image
                      settings and click on the image settings.
                    </li>
                    <li>
                      In the little pop-up select &quot;choose image&quot; to
                      select a different image.
                    </li>
                  </ol>
                  <p>
                    Have a look at the video below to see how to edit background
                    image.
                  </p>
                  <LoomVideoPlayer
                    imageSrc="/start-here/50cbb6fbe094464592211dab7b31324c-00001.jpg"
                    title="Webflow - Gridfolio - 30 July 2022"
                    views="217 views"
                    duration="14 sec ⚡ 11 sec"
                    iframeSrc="https://www.loom.com/embed/50cbb6fbe094464592211dab7b31324c"
                  />

                  <h3>EDITING PRODUCTS (ECOMMERCE)</h3>
                  <p>
                    Editing your eCommerce products is very similar to editing
                    dynamic content.
                  </p>
                  <p>
                    <strong>To edit your products:</strong>
                  </p>
                  <ol role="list">
                    <li>
                      Go to &quot;Ecommerce&quot; and click on
                      &quot;Products&quot;. Find the product you want to edit and
                      select it.
                    </li>
                    <li>Once in the product edit all the fields you want.</li>
                    <li>Save and it&apos;s done!</li>
                  </ol>
                  <figure
                    style={{ maxWidth: "100%", margin: "16px 0" }}
                    className="w-richtext-align-fullwidth w-richtext-figure-type-image"
                  >
                    <div>
                      <img
                        src="/start-here/65beed3b2193026029b10bc9_65b99e22b11267a98f32cb94_656405dade4f2b82c163e561_6523e34eb84a366c4aac6145_64fe87ee6b910cb3c55ab8f6_64ca343c4134d.png"
                        alt="Editing eCommerce products"
                        style={{ width: "100%", height: "auto", borderRadius: "4px" }}
                      />
                    </div>
                  </figure>
                </div>
              </div>

              {/* Tile 4: Support */}
              <div id="support" className="tile-template-details">
                <div className="w-richtext">
                  <h2>SUPPORT</h2>
                  <p>
                    If you purchased Impact Studio Template we offer you basic
                    support. For questions directly related to our template
                    please leave us an email on{" "}
                    <a
                      href="mailto:templates@wavesdesign.io?subject=I%20have%20a%20question%20about%20Impact%20template"
                      style={{ textDecoration: "underline" }}
                    >
                      templates@wavesdesign.io
                    </a>
                  </p>
                  <p>
                    For questions connected to using Webflow as a tool please
                    have a look at their{" "}
                    <a
                      href="https://university.webflow.com/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: "underline" }}
                    >
                      university
                    </a>{" "}
                    or{" "}
                    <a
                      href="https://webflow.com/made-in-webflow/website/Support-Center"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: "underline" }}
                    >
                      contact their support
                    </a>
                    .
                  </p>
                  <br />
                  <p>
                    If you are looking for somebody to customize your template
                    just let us know at{" "}
                    <a
                      href="mailto:templates@wavesdesign.io"
                      style={{ textDecoration: "underline" }}
                    >
                      templates@wavesdesign.io
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Footer & Floating Badge */}
      <Footer />
      <FloatingBadge />
    </main>
  );
}
