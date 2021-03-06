import React from "react";
import HighlightCode from "../components/HighlightCode";

const ButtonsPage = () => {
    const colors = ["light",
    "dark",
    "error",
    "warning",
    "success",
    "notice",
    "debug"];

    return (
        <div>
            <section>
                <h1 className="title-page">Buttons</h1>
            </section>
            <p>
                Use a <span className="badge bg-success">Button</span> in keeping of the situation
                with the <span className="badge bg-success">Button Component</span>.
            </p>
            <section className="mtb-60">
                <h2 id="buttons" className="title-section">Example of simple buttons</h2>
                <div className="mb-30 grid grid-cols-7 gap-4">
                    {colors.map(color => 
                        <button className={`btn btn-${color}`}>btn-{color}</button>
                        )}
                </div>
                {/* Code */}
                <h3>Code</h3>
                <HighlightCode code={`<button class="btn btn-light">btn-light</button>
<button class="btn btn-dark">btn-dark</button>
<button class="btn btn-error">btn-error</button>
<button class="btn btn-warning">btn-warning</button>
<button class="btn btn-success">btn-success</button>
<button class="btn btn-notice">btn-notice</button>
<button class="btn btn-debug">btn-debug</button>`} language="htmlbars" />
            </section>

            <section className="mtb-60">
                <h2 id="buttons" className="title-section">Example of rounded buttons</h2>
                <div className="mb-30 grid grid-cols-7 gap-4">
                    {colors.map(color => 
                        <button className={`btn btn-${color} btn-rounded`}>btn-{color}</button>
                        )}
                </div>
                {/* Code */}
                <h3>Code</h3>
                <HighlightCode code={`<button class="btn btn-light btn-rounded">btn-light</button>
<button class="btn btn-dark btn-rounded">btn-dark</button>
<button class="btn btn-error btn-rounded">btn-error</button>
<button class="btn btn-warning btn-rounded">btn-warning</button>
<button class="btn btn-success btn-rounded">btn-success</button>
<button class="btn btn-notice btn-rounded">btn-notice</button>
<button class="btn btn-debug btn-rounded">btn-debug</button>`} language="htmlbars" />
            </section>
        </div>
    );
}

export default ButtonsPage;