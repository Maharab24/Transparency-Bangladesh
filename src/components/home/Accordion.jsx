

const Accordion = () => {
    return (
        <div className="flex flex-col gap-2 lg:w-2/3 mx-auto">
        <div className="collapse collapse-arrow bg-orange-200">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl text-orange-700 font-bold">What is your return policy?</div>
            <div className="collapse-content">
                <p className="text-orange-900">Returns and exchanges are accepted within 30 days for unused items with tags.</p>
            </div>
        </div>
        <div className="collapse collapse-arrow bg-orange-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl text-orange-700 font-bold">How long does shipping take?</div>
            <div className="collapse-content">
                <p className="text-orange-900">Domestic: 3 to 7 days. International: 7 to 15 days. Exact time shown at checkout.</p>
            </div>
        </div>
        <div className="collapse collapse-arrow bg-orange-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl text-orange-700 font-bold"> How do I choose the right size?</div>
            <div className="collapse-content">
                <p className="text-orange-900">Refer to the size chart or contact us with your measurements for help.</p>
            </div>
        </div>
    </div>
    );
};

export default Accordion;