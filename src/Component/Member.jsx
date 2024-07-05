

const Member = () => {
    return (
        <div>
             <h1 className="text-4xl text-red-600 text-center font-bold mt-20"> <div className="divider divider-error">Bogura Unit Member</div> </h1>
            <div className="lg:flex gap-44 lg:ml-44 ml-32 lg:mt-16 mt-20 ">
                <div>
                    <img className="w-40 mt-8" src="https://i.postimg.cc/QN7qcsys/volunteer-1.png" alt="" />
                    <h1 className="text-red-600 text-4xl font-bold ml-14 mt-5">50</h1>
                    <h1 className="text-red-600 text-22xl font-bold ml-7 mt-2">Active Member</h1>
                </div>
                <div>
                    <img className="w-40 mt-8" src="https://i.postimg.cc/vZ8YWYXN/member-1.png" alt="" />
                    <h1 className="text-red-600 text-4xl font-bold ml-12 mt-4">300</h1>
                    <h1 className="text-red-600 text-22xl font-bold ml-5">Life time Member</h1>
                </div>
                <div>
                    <img className="w-40 mt-8" src="https://i.postimg.cc/8cBG69vG/project-1.png" alt="" />
                    <h1 className="text-red-600 text-4xl font-bold ml-14 mt-4">110</h1>
                    <h1 className="text-red-600 text-22xl font-bold ml-7"> successful Project</h1>
                </div>
                <div>
                    <img className="w-40 mt-8" src="https://i.postimg.cc/kXT3PxFT/people-reached.png" alt="" />
                    <h1 className="text-red-600 text-4xl font-bold ml-10 mt-4">1496</h1>
                    <h1 className="text-red-600 text-22xl font-bold ml-9">Total Member</h1>
                </div>
            </div>
        </div>
    );
};

export default Member;