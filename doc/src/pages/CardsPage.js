import React from "react";
import HighlightCode from "../components/HighlightCode";

const CardsPage= () => {

    return(
        <div>
            <section>
                <h1 className="title-page">Cards</h1>
            </section>
            <p>
                The <span className="badge bg-success">Card Component</span> 
                is an easy way to display a card with a title, an image 
                and some buttons.
            </p>
            <section className="mt-30 mb-60">
                <h2 className="title-section">Exemple of card component</h2>
                <div className="mb-20 grid grid-cols-2 gap-8">
                    <div className="card">
                        <div className="card-image">
                            <img alt="" src="https://www.w3schools.com/w3images/team2.jpg" />
                        </div>
                        <div className="card-title">Titre Card 1</div>
                        <div className="card-body">Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Ab provident aliquam eos hic dolor aut 
                            doloremque inventore sint. Quis, dignissimos recusandae! 
                            Ea numquam aspernatur assumenda tenetur a autem, nihil 
                            quo?
                        </div>
                        <div className="card-footer txt-right">
                            <button className="btn btn-success">See More</button>
                        </div>
                    </div>
                    <div>
                        {/* Code */}
                        <h3>Code</h3>
                        <HighlightCode code={`<div class="card">
    <div class="card-image">
        <img alt="" src="#" />
    </div>
    <div class="card-title">Titre Card 1</div>
    <div class="card-body">
        Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Ab provident aliquam eos hic dolor aut 
        doloremque inventore sint. Quis, dignissimos recusandae! 
        Ea numquam aspernatur assumenda tenetur a autem, nihil 
        quo?
    </div>
    <div class="card-footer txt-right">
        <button class="btn btn-success">See More</button>
    </div>
</div>`} language="htmlbars"/>
                    </div>
                </div>


            </section>
            <section className="mtb-60">
                <h2 className="title-section">Constructed cards exemple</h2>
                <div className="mb-60 grid grid-cols-2 gap-8">
                    <div>
                        <div className="bg-blue-100 rounded-top-l p-30 shadow-lg">
                            Test
                        </div>
                        <div className="mb-20 bg-gray-800 txt-white-300 rounded-bottom-l p-30 shadow-lg">
                            Test
                        </div>
                    </div>
                    <div>
                        {/* Code */}
                        <HighlightCode code={`<div class="bg-blue-100 rounded-top-l p-30 shadow-lg">
    Test
</div>
<div class="bg-gray-800 txt-white-300 rounded-bottom-l p-30 shadow-lg">
    Test
</div>`} language="htmlbars" />
                    </div>
                </div>

                <div className="mb-60 grid grid-cols-2 gap-8">
                    <div className="card w-30">
                        test
                    </div>
                    <div>
                        {/* Code */}
                        <HighlightCode code={`<div class="card w-30">
    test
</div>`} language="htmlbars" />
                    </div>
                </div>
                <div className="mb-60 grid grid-cols-2 gap-8">
                    <div className="card w-30">
                        <div className="card-title">Title test</div>
                    </div>
                    <div>
                        {/* Code */}
                        <HighlightCode code={`<div class="card w-30">
    <div class="card-title">Title test</div>
</div>`} language="htmlbars" />
                    </div>
                </div>
                <div className="mb-60 grid grid-cols-2 gap-8">
                    <div className="card w-30">
                        <div className="card-body">Content test</div>
                    </div>
                    <div>
                        {/* Code */}
                        <HighlightCode code={`<div class="card w-30">
    <div class="card-body">Content test</div>
</div>`} language="htmlbars" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CardsPage;