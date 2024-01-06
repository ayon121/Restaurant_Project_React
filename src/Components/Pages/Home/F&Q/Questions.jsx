
const Questions = () => {
    return (
        <div className="max-w-6xl mx-auto px-3 mt-6 mb-6 font-Nunito">
            <div className="collapse collapse-plus bg-base-200 my-1">
                <input className="text-highlight_color" type="radio" name="my-accordion-3" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                What types of cuisine do you offer?
                </div>
                <div className="collapse-content">
                    <p>Our restaurant specializes in a diverse range of cuisines, including Italian, Mediterranean, and American. Our menu features a variety of dishes to cater to different tastes and preferences, ensuring a delightful dining experience for everyone.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 my-1">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                Do you accommodate dietary restrictions and allergies?
                </div>
                <div className="collapse-content">
                    <p>Yes, we understand the importance of catering to dietary restrictions and allergies. Our chefs are trained to accommodate various dietary needs, including gluten-free, vegetarian, and vegan options. Please inform our staff about any specific dietary requirements when placing your order, and we will do our best to ensure a safe and enjoyable dining experience.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 my-1">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                How can I make a reservation at your restaurant?
                </div>
                <div className="collapse-content">
                    <p>Making a reservation is easy! You can reserve a table by visiting our website and using the online reservation system. Alternatively, you can call our reservation line at +88017***** during business hours. We recommend making a reservation, especially during peak hours, to ensure we can provide you with the best possible dining experience</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 my-1">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                What safety measures are in place for customers during the ongoing pandemic?
                </div>
                <div className="collapse-content">
                    <p>The health and safety of our customers and staff are our top priorities. We have implemented rigorous sanitation protocols and adhere to all recommended guidelines to create a safe dining environment. Our seating arrangements follow social distancing guidelines, and we offer contactless payment options. Additionally, our staff undergoes regular health checks, and we encourage customers to wear masks when not seated. Please check our website for the latest updates on our safety measures.</p>
                </div>
            </div>

        </div>
    );
};

export default Questions;