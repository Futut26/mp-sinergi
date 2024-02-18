import { Link } from '@inertiajs/react'
import React from 'react'

export default function SectionNewProperty() {
  return (
    <div>
      <section className='w-full h-auto'>
            <div className='flex md:justify-between md:flex-row flex-col'>
                <h1 className='text-3xl font-extrabold text-primary md:w-[20%] w-full'>Daftar Properti Terbaru</h1>
                <p className='text-primary md:w-[30%] w-full md:text-end'>Cari hunian impian Anda, dari rumah minimalis hingga apertemen mewah</p>
            </div>

            <div className='mt-5 h-auto border-t-2 border-b-2 border-secondary border-opacity-60 flex md:flex-row flex-col justify-between py-5 gap-5 md:gap-0'>
                <div className='shadow-lg md:w-[30%] flex md:flex-col flex-col'>
                    <figure className='flex justify-end'>
                        <img className='h-14' src="/assets/img/properti/stellar_logo.png" alt="" />
                    </figure>
                    <figure className='flex flex-col w-full'>
                        <img src="/assets/img/properti/stellar_properti.png" alt="" />
                        <h1 className='w-full p-4 bg-primary text-white font-extrabold'>Rp. 1,7 Miliar</h1>
                    </figure>

                    <div className='py-2 flex flex-col px-4 text-primary gap-5'>
                        <div>
                            <h1 className='text-xl font-extrabold '>Stellar Jardin Residence</h1>
                            <p>Cikunir, Bekasi</p>
                        </div>

                        <div>
                            <p>Luas Bangunan : 81 m2</p>
                            <p>Luas Tanah : 82 m2</p>
                        </div>

                        <div className='flex justify-end'>
                            <Link href="/properti/rumah_baru/detail" className='btn btn-secondary hover:bg-primary font-extrabold text-white'>
                                View Properti
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='shadow-lg md:w-[30%] flex md:flex-col flex-col'>
                    <figure className='flex justify-end'>
                        <img className='h-14' src="/assets/img/properti/stellar_logo.png" alt="" />
                    </figure>
                    <figure className='flex flex-col w-full'>
                        <img src="/assets/img/properti/stellar_properti.png" alt="" />
                        <h1 className='w-full p-4 bg-primary text-white font-extrabold'>Rp. 1,7 Miliar</h1>
                    </figure>

                    <div className='py-2 flex flex-col px-4 text-primary gap-5'>
                        <div>
                            <h1 className='text-xl font-extrabold '>Stellar Jardin Residence</h1>
                            <p>Cikunir, Bekasi</p>
                        </div>

                        <div>
                            <p>Luas Bangunan : 81 m2</p>
                            <p>Luas Tanah : 82 m2</p>
                        </div>

                        <div className='flex justify-end'>
                            <Link href="/properti/rumah_baru/detail" className='btn btn-secondary hover:bg-primary font-extrabold text-white'>
                                View Properti
                            </Link>
                        </div>
                    </div>
                </div>


                <div className='shadow-lg md:w-[30%] flex md:flex-col flex-col'>
                    <figure className='flex justify-end'>
                        <img className='h-14' src="/assets/img/properti/stellar_logo.png" alt="" />
                    </figure>
                    <figure className='flex flex-col w-full'>
                        <img src="/assets/img/properti/stellar_properti.png" alt="" />
                        <h1 className='w-full p-4 bg-primary text-white font-extrabold'>Rp. 1,7 Miliar</h1>
                    </figure>

                    <div className='py-2 flex flex-col px-4 text-primary gap-5'>
                        <div>
                            <h1 className='text-xl font-extrabold '>Stellar Jardin Residence</h1>
                            <p>Cikunir, Bekasi</p>
                        </div>

                        <div>
                            <p>Luas Bangunan : 81 m2</p>
                            <p>Luas Tanah : 82 m2</p>
                        </div>

                        <div className='flex justify-end'>
                            <Link href="/properti/rumah_baru/detail" className='btn btn-secondary hover:bg-primary font-extrabold text-white'>
                                View Properti
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </div>
  )
}
