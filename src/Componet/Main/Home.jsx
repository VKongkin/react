
'use client';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'flowbite-react';
import './Style.css'


const Home = () => {
    return (<>

        <div className="All w-[100%] h-[600px] bg-[#024C0C]  justify-center ">
            <div className='container mx-auto px-11 flex justify-center items-center main-grid'>
                <div className="tatile  ">
                    <p className='text-5xl font-bold text-white'>Modern Interior Design Studio</p>
                    <p className='pt-6 text-gray-600'>
                        Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                    <div className="flex gap-7">
                        <button type='button' className='h-9 w-24 rounded-2xl bg-yellow-500 '>OK </button>
                        <button type='button' className='h-9 w-24 rounded-2xl border-solid border-gray-200 border-1  hover:border-blue-600'>OK </button>
                    </div>

                </div>
                <div className="imageNavbar">
                    <img src="https://themewagon.github.io/furni/images/couch.png" alt="" />
                </div>

            </div>

        </div>
        {/* Chair */}
        <div className=" pt-24">
            <div className="container product grid gap-8 md:grid-cols-4 sm:grid-cols-1 ">
                <div className='w-full'>
                    <p className=' font-bold text-2xl'>Crafted with excellent material.</p>
                    <div>
                        <p className='text-gray-500 '>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                    </div>
                    <button className='h-8 w-28 rounded bg-slate-500'>OK</button>

                </div>

                <div className="mokl ">
                    <div className="allimag">
                    </div>
                    <div className="idm">
                        <img src="https://themewagon.github.io/furni/images/product-1.png" alt="" />

                    </div>
                    <div className="w-[100%]">
                        <div className="dicraction">
                            <p className='flex justify-center items-center font-bold'>Krozo Aero Chair</p>
                            <strong className='flex justify-center items-center '>$78.00</strong>
                        </div>
                        <span>
                            <svg className='icon_ko  h-11 w-10' xmlns="https://themewagon.github.io/furni/images/cross.svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7.007 12a.75.75 0 0 1 .75-.75h3.493V7.757a.75.75 0 0 1 1.5 0v3.493h3.493a.75.75 0 1 1 0 1.5H12.75v3.493a.75.75 0 0 1-1.5 0V12.75H7.757a.75.75 0 0 1-.75-.75" /><path fill="currentColor" fill-rule="evenodd" d="M7.317 3.769a42.502 42.502 0 0 1 9.366 0c1.827.204 3.302 1.643 3.516 3.48c.37 3.157.37 6.346 0 9.503c-.215 1.837-1.69 3.275-3.516 3.48a42.5 42.5 0 0 1-9.366 0c-1.827-.205-3.302-1.643-3.516-3.48a40.903 40.903 0 0 1 0-9.503c.214-1.837 1.69-3.276 3.516-3.48m9.2 1.49a41.001 41.001 0 0 0-9.034 0A2.486 2.486 0 0 0 5.29 7.424a39.402 39.402 0 0 0 0 9.154a2.486 2.486 0 0 0 2.193 2.164c2.977.332 6.057.332 9.034 0a2.486 2.486 0 0 0 2.192-2.164a39.401 39.401 0 0 0 0-9.154a2.486 2.486 0 0 0-2.192-2.163" clip-rule="evenodd" /></svg>
                        </span>

                    </div>
                    {/* Test */}
                </div>
                <div className="mokl ">
                    <div className="allimag">
                    </div>
                    <div className="idm">
                        <img src="https://themewagon.github.io/furni/images/product-1.png" alt="" />

                    </div>
                    <div className="w-[100%]">
                        <div className="dicraction">
                            <p className='flex justify-center items-center font-bold'>Krozo Aero Chair</p>
                            <strong className='flex justify-center items-center '>$78.00</strong>
                        </div>
                        <span>
                            <svg className='icon_ko  h-11 w-10' xmlns="https://themewagon.github.io/furni/images/cross.svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7.007 12a.75.75 0 0 1 .75-.75h3.493V7.757a.75.75 0 0 1 1.5 0v3.493h3.493a.75.75 0 1 1 0 1.5H12.75v3.493a.75.75 0 0 1-1.5 0V12.75H7.757a.75.75 0 0 1-.75-.75" /><path fill="currentColor" fill-rule="evenodd" d="M7.317 3.769a42.502 42.502 0 0 1 9.366 0c1.827.204 3.302 1.643 3.516 3.48c.37 3.157.37 6.346 0 9.503c-.215 1.837-1.69 3.275-3.516 3.48a42.5 42.5 0 0 1-9.366 0c-1.827-.205-3.302-1.643-3.516-3.48a40.903 40.903 0 0 1 0-9.503c.214-1.837 1.69-3.276 3.516-3.48m9.2 1.49a41.001 41.001 0 0 0-9.034 0A2.486 2.486 0 0 0 5.29 7.424a39.402 39.402 0 0 0 0 9.154a2.486 2.486 0 0 0 2.193 2.164c2.977.332 6.057.332 9.034 0a2.486 2.486 0 0 0 2.192-2.164a39.401 39.401 0 0 0 0-9.154a2.486 2.486 0 0 0-2.192-2.163" clip-rule="evenodd" /></svg>
                        </span>

                    </div>
                    {/* Test */}
                </div>
                <div className="mokl ">
                    <div className="allimag">
                    </div>
                    <div className="idm">
                        <img src="https://themewagon.github.io/furni/images/product-1.png" alt="" />

                    </div>
                    <div className="w-[100%]">
                        <div className="dicraction">
                            <p className='flex justify-center items-center font-bold'>Krozo Aero Chair</p>
                            <strong className='flex justify-center items-center '>$78.00</strong>
                        </div>
                        <span>
                            <svg className='icon_ko  h-11 w-10' xmlns="https://themewagon.github.io/furni/images/cross.svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7.007 12a.75.75 0 0 1 .75-.75h3.493V7.757a.75.75 0 0 1 1.5 0v3.493h3.493a.75.75 0 1 1 0 1.5H12.75v3.493a.75.75 0 0 1-1.5 0V12.75H7.757a.75.75 0 0 1-.75-.75" /><path fill="currentColor" fill-rule="evenodd" d="M7.317 3.769a42.502 42.502 0 0 1 9.366 0c1.827.204 3.302 1.643 3.516 3.48c.37 3.157.37 6.346 0 9.503c-.215 1.837-1.69 3.275-3.516 3.48a42.5 42.5 0 0 1-9.366 0c-1.827-.205-3.302-1.643-3.516-3.48a40.903 40.903 0 0 1 0-9.503c.214-1.837 1.69-3.276 3.516-3.48m9.2 1.49a41.001 41.001 0 0 0-9.034 0A2.486 2.486 0 0 0 5.29 7.424a39.402 39.402 0 0 0 0 9.154a2.486 2.486 0 0 0 2.193 2.164c2.977.332 6.057.332 9.034 0a2.486 2.486 0 0 0 2.192-2.164a39.401 39.401 0 0 0 0-9.154a2.486 2.486 0 0 0-2.192-2.163" clip-rule="evenodd" /></svg>
                        </span>

                    </div>
                    {/* Test */}
                </div>

            </div>





        </div>
        {/* Why Choose Us */}
        <div className="container">
            <div class="grid grid-cols-2 gap-4  Main_grid ">

                <div className=''>
                    <p className='font-serif text-2xl'>Why Choose Us</p>
                    <p className=''>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                    <div className='grid grid-cols-2'>
                        <div className='icon_ari'>
                            <img className='icon_arid' src="https://themewagon.github.io/furni/images/truck.svg" alt="" />
                            <p>Fast & Free Shipping</p>
                            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>

                        </div>
                        <div className=''>
                            <div className='icon_ari'>
                                <img className='icon_arid' src="https://themewagon.github.io/furni/images/bag.svg" alt="" />
                                <p>Easy to Shop</p>
                                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>

                            </div>

                        </div>
                        <div className=''>
                            <div className='icon_ari'>
                                <img className='icon_arid' src="https://themewagon.github.io/furni/images/support.svg" alt="" />
                                <p>Easy to Shop</p>
                                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>

                            </div>
                        </div>
                        <div className=''>
                            <div className='icon_ari'>
                                <img className='icon_arid' src="https://themewagon.github.io/furni/images/return.svg" alt="" />
                                <p>Easy to Shop</p>
                                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>

                            </div>
                        </div>
                    </div >

                </div >
                <div>
                    <div className=" rounded-md">
                        <img className='rounded-xl' src="https://themewagon.github.io/furni/images/why-choose-us-img.jpg" alt="" />
                    </div>

                </div>


            </div >
            {/* <div class="grid grid-cols-2 gap-4">
                <div class="...">01</div>
                <div class="...">02</div>
            </div> */}
            {/* 
            <p>Why Choose Us</p>
            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
        */}
        </div >



        <div className=" ">
            <div className="container  ">
                <div class=" grid   grid-cols-2 gap-4  Main_grid ">
                    <div className='relative '>
                        <img className=' w-[70%] rounded-xl' src="https://themewagon.github.io/furni/images/img-grid-1.jpg" alt="" />

                        <img className=' absolute top-1 w-[28%] rounded-xl left-[71%]' src="https://themewagon.github.io/furni/images/img-grid-2.jpg" alt="" />
                        <img className=' absolute top-[35%] left-[40%] rounded-xl w-[60%]' src=" https://themewagon.github.io/furni/images/img-grid-3.jpg" alt="" />

                    </div>
                    <div>
                        <div className="pl-[50px] pt-[20%]">
                            <p className='font-serif text-4xl'>We Help You Make Modern Interior Design</p>
                            <p className='pt-[40px] text-gray-500 font-medium'>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada</p>
                            <div className='grid grid-cols-2 '>
                                <div className='icon_ari'>

                                    <p className='font-bold'>Donec vitae odio quis nisl dapibus malesuada</p>

                                </div>
                                <div className=''>
                                    <div className='icon_ari'>

                                        <p className='font-bold' >Donec vitae odio quis nisl dapibus malesuada</p>

                                    </div>

                                </div>
                                <div className=' font-bold'>
                                    <div className='icon_ari'>

                                        <button>Ok</button>

                                    </div>

                                </div>

                            </div >
                        </div>


                    </div>


                </div >
                <div className="">
                    <div class="grid grid-cols-3  Main_trees">
                        <div class=" flex justify-center items-center ">
                            <div className="  flex justify-center">
                                <img className='bg-slate-400  rounded-3xl  w-[60%]' src="https://themewagon.github.io/furni/images/product-1.png" alt="" />
                            </div>
                            <p className=''>
                                Nordic Chair
                                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio

                                Read More</p>
                        </div>
                        <div class=" flex justify-center items-center ">
                            <div className="  flex justify-center">
                                <img className='bg-slate-400  rounded-3xl  w-[60%]' src="https://themewagon.github.io/furni/images/product-1.png" alt="" />
                            </div>
                            <p className=''>
                                Nordic Chair
                                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio

                                Read More</p>
                        </div>
                        <div class=" flex justify-center items-center ">
                            <div className="  flex justify-center">
                                <img className='bg-slate-400  rounded-3xl  w-[60%]' src="https://themewagon.github.io/furni/images/product-1.png" alt="" />
                            </div>
                            <p className=''>
                                Nordic Chair
                                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio

                                Read More</p>
                        </div>
                    </div>
                </div>

            </div >

        </div>
        <div className=" Carosel">
            <div className=" container">
                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                    <Carousel>
                        <div className="  h-full  w-[60%] items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                            <div className="flex">
                                <p className='indent-9'>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>

                            </div>

                            <div className=" flex justify-center items-center">
                                <img className='rounded-full w-[80px]' src="https://themewagon.github.io/furni/images/person-1.png" alt="" />
                            </div>
                        </div>
                        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                            Slide 2
                        </div>
                        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                            Slide 3
                        </div>
                    </Carousel>
                </div>

            </div>
        </div>






        {/* Boostrap */}
        {/* <div className="bg-slate-500 h-[600px] flex justify-center items-center ">
            <div className="container">
                <div className="row">
                    <div class="col-md-5 col-sm-12 ">
                        <div className=" bg-slate-600 ">
                            <p>Modern Interior Design Studio</p>
                            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                            <button>ok</button>
                        </div>

                    </div>
                    <div class="col-md-7 col-sm-12">
                        <div className="">
                            <img src="https://themewagon.github.io/furni/images/couch.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div> */}
        {/* <div className="container">
            <img src="https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
            <img src="https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
        </div> */}
    </>




    )
}

export default Home