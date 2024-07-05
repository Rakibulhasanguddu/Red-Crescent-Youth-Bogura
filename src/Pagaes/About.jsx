import { Helmet } from "react-helmet";


const About = () => {
  return (
    <div>
             <Helmet>
        <title>About Us</title>
        
    </Helmet>
      <h1 className="text-4xl text-red-600 text-center font-bold mt-5"> <div className="divider divider-error">Bogura Unit</div> </h1>
      <div className=" lg:flex gap-5 mt-20 ">
        <div><img className="mt-5 rounded-2xl" src="https://i.postimg.cc/9XYmbkKw/FB-IMG-16799066564295182.jpg" alt="" /></div>
        <div className="font-bolt font-mono ml-5 ">
          <h1 className="font-bold text-xl mt-7 text-red-600">
            The Bangladesh Red Crescent Society, Bogura Unit was formed on 01 January 1972 during the Great War of Independence. </h1>
          <h1 className="mt-5">
            <span className="font-extrabold text-xl "> Address:</span> Bangladesh Red Crescent Society,Bogura Unit,
          </h1>
          <h1>Nowabbari Road, Bogura.</h1>
          <h1 className="gap-3 mt-8">
            <span className="font-extrabold text-lg">Email:</span>  bogura@bdrcs.org <br />
            <h1 className="mt-5"> <span className="font-extrabold text-lg  mt-6">Tele Phone No:</span> 051-78006
              Mobile No: Sec- 01712-130637, ULO:-01726-444342, Youth Chief:- 01521-315255 <br /></h1>


            <h1 className="mt-5">   <span className="font-extrabold text-lg" >First Lif Member:</span>t Mr. Md. Moyezuddin, was the first life member of Bogura Unit and he availed the membership in 1977 <br />
              <br /></h1>

            <span className="font-bold">  At present, Total Number of Life time Members of Bogura Unit = 1324; Here Male Members= 1085 Female Members = 239</span>
          </h1>
        </div>
      </div>
      <div className="lg:ml-[150px] mt-20">
        <h1 className="font-bold text-2xl text-center text-red-600 "> List of Unit Level Officer
        </h1>
        <div className="mt-5">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr >
                  <th>

                  </th>
                  <th > <span>Name</span></th>
                  <th className="font-bold">	Designation </th>

                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>
                    <td>1</td>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Nurun Nahar Begum      </div>
                        <div className="text-sm opacity-50">Bogura</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Deputy Director
                    <br />

                  </td>

                  <th>
                    <button className="btn btn-ghost btn-xs">Details</button>
                  </th>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>
                    <td>2</td>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.daisyui.com/tailwind-css-component-profile-3@56w.png"
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Sayed Md, Samim Raman Sahin </div>
                        <div className="text-sm opacity-50">Bogura</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Field Officer
                    <br />

                  </td>

                  <th>
                    <button className="btn btn-ghost btn-xs">Details</button>
                  </th>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>
                    <td>3</td>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://i.postimg.cc/sfYrrDF0/download.jpg"
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Abdul Mannan   </div>
                        <div className="text-sm opacity-50">Bogura</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Assistant  Director
                    <br />

                  </td>

                  <th>
                    <button className="btn btn-ghost btn-xs">Details</button>
                  </th>
                </tr>
                {/* row 4 */}
                <tr>
                  <th>
                    <td>4</td>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.daisyui.com/tailwind-css-component-profile-5@56w.png"
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Tohidul Islam Nayon   </div>
                        <div className="text-sm opacity-50">Bogura</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Field officer
                    <br />

                  </td>

                  <th>
                    <button className="btn btn-ghost btn-xs">Details</button>
                  </th>
                </tr>
              </tbody>
              {/* foot */}

            </table>
          </div>
        </div>
      </div>


      {/* question               */}

      <div className="mt-20">
        <div className="collapse collapse-arrow bg-red-600">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium text-white">বাংলাদেশ রেড ক্রিসেন্ট সোসাইটি কি ?</div>
          <div className="collapse-content">
            <p className="text-white">বাংলাদেশ রেড ক্রিসেন্ট সোসাইটি (সংক্ষেপে বিডিআরসিএস নামেও পরিচিত) একটি মানবিক সংস্থা এবং বাংলাদেশ সরকারের দ্বারা পরিচালিত। এই সংগঠনটি ১৯৭৩ সালে রাষ্ট্রপতি আদেশ ২৬ এর মাধ্যমে বাংলাদেশ রেড ক্রস সোসাইটি হিসাবে প্রতিষ্ঠিত হয়েছিল।[১] ১৯৮৮ সালে এটির নাম পরিবর্তন করে বাংলাদেশ রেড ক্রিসেন্ট সোসাইটি রাখা হয় যখন দেশটি ইসলামকে সাংবিধানিক ধর্ম হিসেবে গ্রহণ করে এর সদর দফতর ঢাকা এবং এছাড়াও ৬৪ টি ইউনিট রয়েছে। ৬৪ টি জেলা এবং ঢাকার মেট্রোপলিটন শহরে প্রতিটিতে একটি ইউনিট গঠন করা হয়েছে। চট্টগ্রাম, রাজশাহী ও খুলনা। বর্তমানে মোট ইউনিট সংখ্যা ৬৮ টি (৬৪ টি জেলা এবং ৪ টি সিটি)</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-red-600 mt-5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium text-white">বাংলাদেশ রেড ক্রিসেন্ট সোসাইটি এর কাজ কি?</div>
          <div className="collapse-content">
            <p className="text-white">বন্যা, ঘূর্ণিঝড় এবং অন্যান্য প্রাকৃতিক দুর্যোগের সময় ত্রাণ ও পুনর্বাসনে সমাজ একটি সহায়ক ভূমিকা পালন করেছে। সারা বাংলাদেশের রক্ত সেবা প্রদান করছেন। এছাড়াও যেকোনো পরিস্থিতে অসহায়ের পাশে থাকাই রেড ক্রিসেন্টের কাজ।</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-red-600 mt-5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium text-white">বাংলাদেশ রেড ক্রিসেন্ট সোসাইটি এর ইতিহাস</div>
          <div className="collapse-content">
            <p className="text-white">৩১ মার্চ, ১৯৭৩ সালে গণপ্রজাতন্ত্রী বাংলাদেশের রাষ্ট্রপতি বঙ্গবন্ধু শেখ মুজিবুর রহমান বাংলাদেশ রেড ক্রস সোসাইটি আদেশে ১৯৭৩ (পিও-২৬) জারি করেন । এই আদেশের বলে ১৬ ডিসেম্বর, ১৯৭১ সাল থেকে 'বাংলাদেশ রেড ক্রস সোসাইটি' স্বীকৃতি লাভ করে।[২] এরপর, ১৯৭৩ সালের ২০ সেপ্টেম্বর রেড ক্রসের ২২তম আন্তর্জাতিক সম্মেলনে তেহরানে বাংলাদেশ রেড ক্রস সোসাইটি আন্তর্জাতিকভাবে পূর্ণ স্বীকৃতি লাভ করে।[২] দেশ বিভাগের পরবর্তী ১৯৪৭ সালের ২০ ডিসেম্বর দুই পাকিস্তান যখন এক ছিল তখন থেকে এর কার্যক্রম এই অঞ্চলে শুরু হয়েছিল অবশ্য।

১৯৮৮ সালে সংগঠনটির নাম পরিবর্তন করে 'বাংলাদেশ রেড ক্রিসেন্ট সোসাইটি' রাখা হয়।[৩] সংস্থাটির প্রধান কার্যালয় ঢাকায় অবস্থিত। সংস্থাটি দেশের বিভিন্ন মানবিক বিপর্যয়ে দেশের বিভিন্ন প্রান্তে আর্তমানবতার সেবা করে থাকে। সংগঠনটির বর্তমান চেয়ারম্যান মেজর জেনারেল (অব.) এ টি এম আব্দুল ওয়াহাব।[৪]</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-red-600 mt-5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium text-white">বাংলাদেশ রেড ক্রিসেন্ট সোসাইটি এর সাংগঠনিক কাঠামো?</div>
          <div className="collapse-content">
            <p className="text-white">বাংলাদেশ রেড ক্রিসেন্ট সোসাইটির প্রধান হলেন বাংলাদেশের রাষ্ট্রপতি। তার তত্ত্বাবধানে রেড ক্রিসেন্টের সংস্থাটি একটি ম্যানেজিং বোর্ড পরিচালনা করেন।

ব্যবস্থাপনা
ম্যানেজিং বোর্ড ১৫ জন সদস্য নিয়ে গঠিত। বোর্ডে একজন চেয়ারম্যান ও একজন ভাইস-চেয়ারম্যান এবং একজন কোষাধ্যক্ষ এবং ১২ জন সাধারণ সদস্য রয়েছেন গঠিত হয়। ২০২২ জুন থেকে বর্তমান পোস্টহোল্ডাররা হলেন: [৫] চেয়ারম্যানঃ মেজর জেনারেল: এ টি এম আব্দুল ওয়াহাব (অব. ভাইস-চেয়ারম্যান: মোঃ নুর-উর-রহ কোষাধ্যক্ষঃ মোহাম্মদ আব্দুস সালাম

ম্যানেজিং বোর্ডের অধীনে এই সংস্থাটি পরিচালনাকারী প্রতিটি বিভাগের জন্য ২ জন করে বিভাগীয় প্রধান এবং ৯ জন করে পরিচালক দায়ী থাকেন। এই সিনিয়র ব্যবস্থাপনার সভাপতিত্ব করেন একজন মহাসচিব এবং একজন উপ-মহাসচিব। [৬] বিডিআরসিএসের বর্তমান মহাসচিব কাজী শফিকুল আজম এবং বর্তমান উপ-মহাসচিব মোঃ রফিকুল ইসলাম রয়েছে । [৭]</p>
          </div>
        </div>

      </div>



    </div>
  );
};

export default About;