import { Helmet } from "react-helmet";
import { IoCall } from "react-icons/io5";

import { SiGmail } from "react-icons/si";
const Unitmember = () => {
    return (
        <div>
                   <Helmet>
        <title>Unit Member</title>
        
    </Helmet>
            <h1 className="text-4xl text-red-600 text-center font-bold mt-5"> <div className="divider divider-error">Bogura Unit</div> </h1>
            <div className="flex justify-evenly items-center">
                <div>
                    <img className="rounded-2xl h-[300px] w-[240px]" src="https://i.postimg.cc/tJ3DM4gK/01-Dr-Mokbul-Hossain-1.jpg" alt="" />
                </div>
                <div>
                    <h1 className="text-red-600 font-bold">MD. MOKBUL HOSSEN</h1>
                    <p className="text-red-600 text-center mt-2">CHAIRMAN</p>
                    <div className="tooltip" data-tip="01710*******">
                        <button><p className="w-10 h-10 mt-1 ml-16"><img src="https://i.postimg.cc/FRs9R7MZ/phone-call.png" alt="" /></p></button>
                    </div>

                </div>
            </div>

            {/* ------------------2--------------- */}

            <div className="flex justify-evenly items-center mt-5">
                <div>
                    <img className="rounded-2xl h-[300px] w-[240px]" src="https://i.postimg.cc/CLNpZF4r/02-Mokbul-hossain-mukul.jpg" alt="" />
                </div>
                <div>
                    <h1 className="text-red-600 font-bold">MAKBUL HOSSAIN </h1>
                    <p className="text-red-600 text-center mt-2">ACTING CHAIRMAN</p>
                    <div className="tooltip" data-tip="01712*******">
                        <button><p className="w-10 h-10 mt-1 ml-16"><img src="https://i.postimg.cc/FRs9R7MZ/phone-call.png" alt="" /></p></button>
                    </div>

                </div>
            </div>
            {/* ------------------2--------------- */}

            <div className="flex justify-evenly items-center mt-5">
                <div>
                    <img className="rounded-2xl h-[300px] w-[240px]" src="https://i.postimg.cc/sgN8S1Gm/03-Surutzaman.jpg" alt="" />
                </div>
                <div>
                    <h1 className="text-red-600 font-bold">       A.K.M SURUTZAMAN</h1>
                    <p className="text-red-600 text-center mt-2">SECRETARY</p>
                    <div className="tooltip" data-tip="01712*******">
                        <button><p className="w-10 h-10 mt-1 ml-16"><img src="https://i.postimg.cc/FRs9R7MZ/phone-call.png" alt="" /></p></button>
                    </div>

                </div>
            </div>

            <h1 className="text-2xl text-red-600 text-center font-bold mt-10"> <div className="divider divider-error">Other Member</div> </h1>


            <div className="bg-red-600 w-full rounded-xl ">
            <div className="card bg-red-400 w-96 shadow-xl flex lg:ml-[570px] ml-5 mt-10">
                        <figure className="px-10 pt-10">
                            <img
                                src="https://i.postimg.cc/KvdSxRGM/5cdd9b4a-bfc8-4113-ba3f-e330783975d0.jpg"
                                alt="Shoes"
                                className="rounded-xl h-80" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Md. Rayhan Khondoker</h2>
                            <p>Youth & Volunteer Chief</p>
                       

                            <div className="card-actions flex gap-5">
                            <div className="tooltip" data-tip="01701077017">
                        <button><p className="gap-2"><IoCall /></p></button>
                    </div>
                    <div className="tooltip" data-tip="rcyrayhan@gmail.com">
                        <button><p className="gap-2"><SiGmail /></p></button>
                    </div>
                               
                            </div>
                        </div>
                    </div>

                    <div className="lg:flex gap-40 ml-5 lg:ml-72 mt-5">
                    <div className="card bg-red-400 w-96 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                src="https://i.postimg.cc/pLf2SDfT/8ee1e022-5ab6-4386-965b-939ffeaf0cc7.jpg"
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Dhrubasarathi Goswami Arghya</h2>
                            <p>Deputy Youth Chief-1 </p>
                       

                            <div className="card-actions flex gap-5">
                            <div className="tooltip" data-tip="01568 565847">
                        <button><p className="gap-2"><IoCall /></p></button>
                    </div>
                    <div className="tooltip" data-tip="dsarathi77@gmail.com">
                        <button><p className="gap-2"><SiGmail /></p></button>
                    </div>
                               
                            </div>
                        </div>
                    </div>
                    <div className="card bg-red-400 w-96 shadow-xl  mt-5">
                        <figure className="px-10 pt-10">
                            <img
                                src="https://i.postimg.cc/5y84Mvhn/d9b5e534-3187-43a6-b560-121e85ce9e62.jpg"
                                alt="Shoes"
                                className="rounded-xl " />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Syed Rafe Ahmmed </h2>
                            <p>Deputy Youth Chief-1</p>
                       

                            <div className="card-actions flex gap-5">
                            <div className="tooltip" data-tip="01778 572658 ">
                        <button><p className="gap-2"><IoCall /></p></button>
                    </div>
                    <div className="tooltip" data-tip="srafe4444@gmail.com">
                        <button><p className="gap-2"><SiGmail /></p></button>
                    </div>
                               
                            </div>
                        </div>
                    </div>
                    </div>

                <div className=" lg:grid lg:grid-cols-3 sm:gap-4 mt-20 ml-5 lg:ml-20  ">
                   

                    
                    
                    {/* 3 */}
                    <div className="card bg-base-100 w-96 shadow-xl mt-5">
                        <figure className="px-10 pt-10">
                            <img
                                src="https://i.postimg.cc/rFzjgjL1/ce7ec815-381c-437f-b4b8-f389ef8cc77f.jpg"
                                alt="Shoes"
                                className="rounded-xl " />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Md. Ahad Islam Nion </h2>
                            <p>Departmental Chief</p>
                            <p>Administration, organizing
                            and recruitment</p>
                            
                       

                            <div className="card-actions flex gap-5">
                            <div className="tooltip" data-tip="01781 635165  ">
                        <button><p className="gap-2"><IoCall /></p></button>
                    </div>
                    <div className="tooltip" data-tip="ainion001@gmail.com">
                        <button><p className="gap-2 "><SiGmail /></p></button>
                    </div>
                               
                            </div>
                        </div>
                    </div>
                    {/* 4 */}
                    <div className="card bg-base-100 w-96 shadow-xl mt-5">
                        <figure className="px-10 pt-10">
                            <img
                                src="https://i.postimg.cc/G2qPx87g/e81bdd95-1ca1-4af0-b063-1355f67fda51.jpg"
                                alt="Shoes"
                                className="rounded-xl " />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Md. Moinul Islam</h2>
                            <p>Departmental Chief</p>
                            <p>Training and Co-curriculum</p>
                            
                              


                            <div className="card-actions flex gap-5">
                            <div className="tooltip" data-tip="01751 364187 ">
                        <button><p className="gap-2"><IoCall /></p></button>
                    </div>
                    <div className="tooltip" data-tip="maynul867@gmail.com">
                        <button><p className="gap-2"><SiGmail /></p></button>
                    </div>
                               
                            </div>
                        </div>
                    </div>
                    {/* 5 */}
                    <div className="card bg-base-100 w-96 shadow-xl  mt-5">
                        <figure className="px-10 pt-10">
                            <img
                                src="https://i.postimg.cc/tJdsNL4q/fb641a2a-aa89-4de9-aea9-3e9fe35e9d83.jpg"
                                alt="Shoes"
                                className="rounded-xl " />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title"> Md.Muhsinul Islam Muin</h2>
                            <p>Departmental Chief</p>
                            <p>Administration, organizing
                            and recruitment</p>
                            
                              
                             


                            <div className="card-actions flex gap-5">
                            <div className="tooltip" data-tip=" 01531 753226">
                        <button><p className="gap-2"><IoCall /></p></button>
                    </div>
                    <div className="tooltip" data-tip=" muhsinulislam520@gmail.com">
                        <button><p className="gap-2"><SiGmail /></p></button>
                    </div>
                               
                            </div>
                        </div>
                    </div>


                    {/* 6 */}
                   
                    <div className="card bg-base-100 w-96 shadow-xl  mt-5">
                        <figure className="px-10 pt-10">
                            <img
                                src="https://i.postimg.cc/jSSDy30T/7cefa6da-166d-4661-908d-e370669b869d.jpg"
                                alt="Shoes"
                                className="rounded-xl h-80 " />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title"> Mst. Sultana Khatun</h2>
                            <p>Departmental Chief</p>
                            <p>Disaster and Humanitarian
                            Response</p>
                            
                             

                             


                            <div className="card-actions flex gap-5">
                            <div className="tooltip" data-tip=" 01873 022420">
                        <button><p className="gap-2"><IoCall /></p></button>
                    </div>
                    <div className="tooltip" data-tip=" taniasultana013@gmail.com">
                        <button><p className="gap-2"><SiGmail /></p></button>
                    </div>
                               
                            </div>
                        </div>
                    </div>



                    <div className="card bg-base-100 w-96 shadow-xl  mt-5">
                        <figure className="px-10 pt-10">
                            <img
                                src="https://i.postimg.cc/ZKKbQ9fF/42a09a3f-b607-41b6-9981-114df3c7087c.jpg"
                                alt="Shoes"
                                className="rounded-xl " />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title"> Md. Emon Babu</h2>
                            <p>Departmental Chief</p>
                            <p>Health Services
                            </p>
                            <div className="card-actions flex gap-5">
                            <div className="tooltip" data-tip=" 01724 323007">
                        <button><p className="gap-2"><IoCall /></p></button>
                    </div>
                    <div className="tooltip" data-tip=" emon38340@gmail.com">
                        <button><p className="gap-2"><SiGmail /></p></button>
                    </div>
                               
                            </div>
                        </div>
                    </div>



                    <div className="card bg-base-100 w-96 shadow-xl  mt-5">
                        <figure className="px-10 pt-10">
                            <img
                                src="https://i.postimg.cc/QdvjVfj0/26970d41-12f2-4cff-a747-1ae5d4b1ee41.jpg"
                                alt="Shoes"
                                className="rounded-xl " />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title"> Marufa Afrin</h2>
                            <p>Departmental Chief</p>
                            <p>Resource Mobilization

                            </p>

                          

                            <div className="card-actions flex gap-5">
                            <div className="tooltip" data-tip=" 01612 317278 ">
                        <button><p className="gap-2"><IoCall /></p></button>
                    </div>
                    <div className="tooltip" data-tip=" mamredu206@gmail.com">
                        <button><p className="gap-2"><SiGmail /></p></button>
                    </div>
                               
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Unitmember;