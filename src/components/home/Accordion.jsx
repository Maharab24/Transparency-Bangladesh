

const Accordion = () => {
    return (
        <div className="flex flex-col gap-2 lg:w-2/3 mx-auto">
        <div className="collapse collapse-arrow bg-orange-200">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl text-orange-700 font-bold">How can I report a corruption case anonymously?</div>
            <div className="collapse-content">
                <p className="text-orange-900">RYou can submit a report by clicking on the “Report Corruption” button on the homepage. You don’t need to share personal information if you want to stay anonymous. Just give as much detail as possible, like location, people involved, and what happened. Your safety is our top priority..</p>
            </div>
        </div>
        <div className="collapse collapse-arrow bg-orange-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl text-orange-700 font-bold">How do I know if action is being taken on my report?</div>
            <div className="collapse-content">
                <p className="text-orange-900">After submitting a report, you can track its status from your dashboard. You’ll see updates like “Under Review,” “Investigating,” or “Resolved.” You may also receive a notification if there’s an important update. This helps you stay informed at every step.</p>
            </div>
        </div>
        <div className="collapse collapse-arrow bg-orange-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl text-orange-700 font-bold"> What kind of content is in the Education section?</div>
            <div className="collapse-content">
                <p className="text-orange-900">The Education section provides articles, tips, and videos to help you understand how corruption works, how to spot it, and how to take safe action. It's there to empower citizens with knowledge and promote honest practices in everyday life.</p>
            </div>
        </div>
    </div>
    );
};

export default Accordion;