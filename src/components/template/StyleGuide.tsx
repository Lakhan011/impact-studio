import React from "react";
import Footer from "@/components/common/Footer";
import FloatingBadge from "@/components/common/FloatingBadge";

const ZWJ = "\u200D";

export default function StyleGuide() {
  return (
    <main>
      <section className="section hero-template">
        <div className="w-layout-blockcontainer main-container w-container">
          <div className="title-wrap-template">
            <h1>Style guide</h1>
            <div className="limit-subtitle-template">
              <div className="subtitle">
                Take advantage of beautiful design and easily create your dream
                Agency&nbsp;Portfolio Webflow website that will impress your
                visitors.
              </div>
            </div>
            <div className="flex-cta-center mg-top-16">
              <a
                href="https://webflow.com/templates/html/impactstudio-agency-website-template"
                target="_blank"
                rel="noreferrer"
                className="cta white w-button"
              >
                Buy template
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="w-layout-blockcontainer main-container w-container">
          <div className="columns-template-details w-row">
            <div className="left-column-template-details w-col w-col-4 w-col-stack">
              <div className="tile-template-navigation">
                <a href="#typography" className="link-template-navigation">
                  Typography
                </a>
                <a href="#colors" className="link-template-navigation">
                  Colors
                </a>
                <a href="#icons" className="link-template-navigation">
                  Icons
                </a>
                <a href="#fonts" className="link-template-navigation">
                  Fonts
                </a>
                <a href="#buttons" className="link-template-navigation">
                  Buttons
                </a>
              </div>
            </div>
            <div className="right-column-template-details w-col w-col-8 w-col-stack">
              <div id="typography" className="tile-template-details">
                <h1>
                  Heading 1
                  <br />
                </h1>
                <div className="text-style-h1">Aa Bb Cc</div>
                <div>Heading 1 - 120px / 110% (DM&nbsp;Sans)</div>
                <div className="divider-typography" />
                <h2>
                  Heading 2
                  <br />
                </h2>
                <div className="text-style-h2">Aa Bb Cc</div>
                <div>Heading 2 - 40px / 120% (DM&nbsp;Sans)</div>
                <div className="divider-typography" />
                <h3>
                  Heading 3
                  <br />
                </h3>
                <div className="text-style-h3">Aa Bb Cc</div>
                <div>Heading 3 - 30px / 120% (DM&nbsp;Sans)</div>
                <div className="divider-typography" />
                <h4>
                  Heading 4
                  <br />
                  Aa Bb Cc
                </h4>
                <div>Heading 4 - 18px / 24px (DM&nbsp;Sans)</div>
                <div className="divider-typography" />
                <h5>
                  Heading 5
                  <br />
                  Aa Bb Cc
                </h5>
                <div>Heading 5 - 14px / 20px (DM&nbsp;Sans)</div>
                <div className="divider-typography" />
                <h6>
                  Heading 6
                  <br />
                  Aa Bb Cc
                </h6>
                <div>Heading 6 - 12px / 18px (DM&nbsp;Sans)</div>
                <div className="divider-typography" />
                <p className="subtitle">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
                <div>Subtitle - 34px / 120% (DM&nbsp;Sans)</div>
                <div className="divider-typography" />
                <p className="paragraph-big">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Aenean faucibus nibh et justo
                  cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                  tristique posuere.
                </p>
                <div>Paragraph Big - 24px / 125% (DM&nbsp;Sans)</div>
                <div className="divider-typography" />
                <p className="paragraph-medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Aenean faucibus nibh et justo
                  cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                  tristique posuere.
                </p>
                <div>Paragraph Medium - 22px / 125% (DM&nbsp;Sans)</div>
                <div className="divider-typography" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Aenean faucibus nibh et justo
                  cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                  tristique posuere.
                </p>
                <div>Paragraph Regular - 20px / 120% (DM&nbsp;Sans)</div>
                <div className="divider-typography" />
                <div className="w-richtext">
                  <h2>What’s a Rich Text element?</h2>
                  <p>
                    The rich text element allows you to create and format
                    headings, paragraphs, blockquotes, images, and video all in
                    one place instead of having to add and format them
                    individually. Just double-click and easily create content.
                  </p>
                  <h3>Static and dynamic content editing</h3>
                  <p>
                    A rich text element can be used with static or dynamic
                    content. For static content, just drop it into any page and
                    begin editing.
                  </p>
                  <blockquote>
                    For dynamic content, add a rich text field to any collection
                    and then connect a rich text element to that field in the
                    settings panel. Voila!
                  </blockquote>
                  <h4>How to customize formatting for each rich text</h4>
                  <p>
                    Headings, paragraphs, blockquotes, figures, images, and
                    figure captions can all be styled after a class is added to
                    the rich text element using the &quot;When inside of&quot;
                    nested selector system.
                  </p>
                </div>
                <div>Rich Text Example</div>
              </div>

              <div id="colors" className="tile-template-details">
                <h2 className="template-h2">Colors</h2>
                <div className="w-layout-grid grid-colors">
                  <div className="color-master">
                    <div className="color color-one" />
                    <div>Main / #ff3128</div>
                  </div>
                  <div className="color-master">
                    <div className="color color-three" />
                    <div>Elevation main / #ff4138</div>
                  </div>
                  <div className="color-master">
                    <div className="color color-two" />
                    <div>Light / #fff8eb</div>
                  </div>
                  <div className="color-master">
                    <div className="color color-four" />
                    <div>Elevation Light / #fff0e3</div>
                  </div>
                </div>
              </div>

              <div id="icons" className="tile-template-details">
                <h2 className="template-h2">Icons</h2>
                <p>
                  <strong>
                    Google Fonts:
                    <br />
                    {ZWJ}
                  </strong>
                  Impact Studio Template is using one{" "}
                  <a
                    href="https://fonts.google.com/specimen/DM+Sans"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Google Font
                  </a>{" "}
                  called DM&nbsp;Sans. This Google Font is 100% free for personal
                  and commercial use.
                  <br />
                  {ZWJ}
                  <br />
                  <strong>
                    Fontshare:
                    <br />
                    {ZWJ}
                  </strong>
                  The Impact Studio template uses Zodiak, a closed-source font
                  from the Indian Type Foundry (ITF) that is 100% free for both
                  personal and commercial use, available exclusively via ITF&#x27;s
                  free fonts service at Fontshare. By buying or using this
                  template, you agree to ITF&#x27;s Free Font License (FFL).
                  <br />
                  {ZWJ}
                  <br />
                  Links:
                  <strong>
                    <br />
                    Zodiak
                  </strong>
                  :{" "}
                  <a
                    href="https://www.fontshare.com/fonts/zodiak"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://www.fontshare.com/fonts/zodiak
                  </a>
                  <a href="https://www.fontshare.com/fonts/red-hat-display">
                    <strong>
                      {ZWJ}
                      <br />
                      {ZWJ}
                    </strong>
                  </a>
                  <strong>Indian Type Foundry</strong>:{" "}
                  <a href="http://indiantypefoundry.com/" rel="noreferrer">
                    indiantypefoundry.com
                    <br />
                    {ZWJ}
                  </a>
                  <strong>Fontshare</strong>:{" "}
                  <a
                    href="https://www.fontshare.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://www.fontshare.com
                    <strong>
                      {ZWJ}
                      <br />
                      {ZWJ}
                    </strong>
                  </a>
                  <strong>Free Font License</strong>:{" "}
                  <a
                    href="https://www.fontshare.com/licenses/itf-ffl"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://www.fontshare.com/licenses/itf-ffl
                  </a>
                </p>
              </div>

              <div id="fonts" className="tile-template-details">
                <h2 className="template-h2">Fonts</h2>
                <p>
                  Impact Studio Template is using two additional fonts, called
                  DM&nbsp;Sans and&nbsp;Zodiak. They can be downloaded at{" "}
                  <a
                    href="https://www.fontshare.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Fontshare
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://fonts.google.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Google Fonts
                  </a>{" "}
                  and are&nbsp;100% free for personal and commercial use.
                </p>
              </div>

              <div id="buttons" className="tile-template-details">
                <h2 className="template-h2">Buttons</h2>
                <div className="w-layout-grid grid-buttons">
                  <div className="wrap-template-ui">
                    <a href="#" className="line-link-block w-inline-block">
                      <div>see all</div>
                      <div className="underline-link-master">
                        <div className="underline-link-fill" />
                      </div>
                    </a>
                    <div>Link Underline / Main</div>
                  </div>
                  <div className="wrap-template-ui red-background">
                    <a
                      href="#"
                      className="line-link-block white-link w-inline-block"
                    >
                      <div>see all</div>
                      <div className="underline-link-master white-underline-master">
                        <div className="underline-link-fill white-underline-fill" />
                      </div>
                    </a>
                    <div>Link Underline / Light</div>
                  </div>
                  <div className="wrap-template-ui">
                    <a
                      href="#"
                      className="line-link-block small-line-link w-inline-block"
                    >
                      <div>see all</div>
                      <div className="underline-link-master small-underline-link-master">
                        <div className="underline-link-fill" />
                      </div>
                    </a>
                    <div>Link Underline / Main Small</div>
                  </div>
                  <div className="wrap-template-ui red-background">
                    <a
                      href="#"
                      className="line-link-block small-line-link white-link w-inline-block"
                    >
                      <div>see all</div>
                      <div className="underline-link-master small-underline-link-master white-underline-master">
                        <div className="underline-link-fill white-underline-fill" />
                      </div>
                    </a>
                    <div>Link Underline / Light Small</div>
                  </div>
                  <div className="wrap-template-ui">
                    <a href="#" className="cta w-button">
                      Button Text
                    </a>
                    <div>CTA&nbsp;Main</div>
                  </div>
                  <div className="wrap-template-ui">
                    <a href="#" className="cta outline w-button">
                      Button Text
                    </a>
                    <div>CTA&nbsp;Outline</div>
                  </div>
                  <div className="wrap-template-ui red-background">
                    <a href="#" className="cta white w-button">
                      Button Text
                    </a>
                    <div>CTA&nbsp;Main White</div>
                  </div>
                  <div className="wrap-template-ui red-background">
                    <a href="#" className="cta outline-white w-button">
                      Button Text
                    </a>
                    <div>CTA&nbsp;Main White</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingBadge />
    </main>
  );
}
