import { Input, Button } from "@nextui-org/react";
import logo from "../assets/logo.png";
import seven from "../assets/seven.png";
import profile from "../assets/profile.jpg";
import telkom from "../assets/telkom.png";
import star from "../assets/star.png";
import penguin from "../assets/penguin2.png";
import React, { useState } from "react";

const ShowCatalog = () => {
  const [count, setCount] = useState(100);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <React.Fragment>
      <div className="body-catalog bg-white min-h-screen text-black">
        <div className="catalog-container">
          {/*navbar*/}
          <div className="nav px-[35px] py-[25px] gap-[30px] flex flex-row items-center justify-between">
            <img src={logo} alt="logo" className="w-[140px]" />
            <Input
              type="email"
              size="lg"
              radius="sm"
              placeholder="Cari produk, jasa, atau vendor"
              labelPlacement="outside"
              endContent={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              }
            />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
              />
            </svg>
            <div className="user-profile flex flex-row items-center gap-[20px] w-[250px]">
              <img src={profile} alt="profile" className="w-[40px] rounded-[50%]" />
              <div className="profile-details flex flex-col items-start">
                <h2 className="text-[14px] font-bold">Annisa R</h2>
                <h2 className="text-[14px]">Buyer</h2>
              </div>
            </div>
          </div>
          {/*end of navbar*/}

          {/*main*/}
          <div className="content-catalog flex px-[50px] flex-row w-full justify-between h-[650px]">
            <div className="content w-[1050px] flex flex-col">
              {/*headbar*/}
              <div className="headbar-body px-[25px] py-[20px] flex flex-row items-center justify-between border-1 border-slate-300 rounded-lg">
                <div className="left-side flex flex-row items-center gap-[15px]">
                  <img src={seven} alt="seven" className="w-[50px]" />
                  <div className="details-left-side flex flex-col items-start">
                    <h2 className="text-[16px] font-semibold">Seven Stereo</h2>
                    <h2 className="text-[12px]">Non-PKP</h2>
                    <h2 className="text-[12px] mt-[10px] flex flex-row items-center gap-[4px]">
                      {" "}
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                      </span>
                      Kab. Sidoarjo
                    </h2>
                  </div>
                </div>

                <div className="right-side flex flex-row items-center gap-[30px]">
                  <div className="rate flex flex-row items-center gap-[30px]">
                    <div className="bumn flex flex-col items-center">
                      <img src={telkom} alt="telkom" className="w-[35px]" />
                      <h2 className="text-[12px] font-medium mt-[10px]">BUMN Pengampu</h2>
                    </div>
                    <div className="separator h-[60px] w-[1px] bg-slate-300" />
                    <div className="bumn flex flex-col items-center">
                      <div className="star-container flex flex-row items-center gap-[10px]">
                        <img src={star} alt="star" className="w-[35px]" />
                        <h2 className="tetx-[14px]">0</h2>
                      </div>
                      <h2 className="text-[12px] font-medium mt-[10px]">Rating & Ulasan</h2>
                    </div>
                  </div>
                </div>
              </div>
              {/*end of headbar*/}

              {/*card*/}
              <div className="title">
                <h2 className="font-semibold mt-[20px] text-[18px]">Katalog Pengadaan Acara PT. PLN (Persero)</h2>
              </div>

              <div className="card-container flex flex-col gap-[20px] mt-[20px]">
                <div className="card-1 flex flex-row items-center justify-between border-2 pr-[20px] rounded-2xl">
                  <div className="img-caption flex flex-row gap-[40px] items-center">
                    <img src={penguin} alt="" />
                    <div className="caption flex flex-col">
                      <h2 className="font-semibold text-[16px]">Produk Penguin Kecil</h2>
                      <h2 className="mt-[8px] text-[14px]">Warna Hitam</h2>
                      <h2 className="flex flex-row items-center gap-[5px] mt-[40px]">
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                            />
                          </svg>
                        </span>
                        Catatan untuk penjual
                      </h2>
                    </div>
                  </div>
                  <div className="count flex flex-col items-end gap-[50px]">
                    <h2 className="text-[16px] font-bold">Rp.50.000</h2>
                    <div className="count-product flex flex-row items-center">
                      <button className="px-[10px] py-[3px] border-2" onClick={incrementCount}>
                        +
                      </button>
                      <h2 className="border-t-2 border-b-2 px-[10px] py-[3px]">{count}</h2>
                      <button className="px-[10px] py-[3px] border-2" onClick={decrementCount}>
                        -
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card-1 flex flex-row items-center justify-between border-2 pr-[20px] rounded-2xl">
                  <div className="img-caption flex flex-row gap-[40px] items-center">
                    <img src={penguin} alt="" />
                    <div className="caption flex flex-col">
                      <h2 className="font-semibold text-[16px]">Produk Penguin Kecil</h2>
                      <h2 className="mt-[8px] text-[14px]">Warna Hitam</h2>
                      <h2 className="flex flex-row items-center gap-[5px] mt-[40px]">
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                            />
                          </svg>
                        </span>
                        Catatan untuk penjual
                      </h2>
                    </div>
                  </div>
                  <div className="count flex flex-col items-end gap-[50px]">
                    <h2 className="text-[16px] font-bold">Rp.500.000</h2>
                    <div className="count-product flex flex-row items-center">
                      <button className="px-[10px] py-[3px] border-2" onClick={incrementCount}>
                        +
                      </button>
                      <h2 className="border-t-2 border-b-2 px-[10px] py-[3px]">{count}</h2>
                      <button className="px-[10px] py-[3px] border-2" onClick={decrementCount}>
                        -
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card-1 flex flex-row items-center justify-between border-2 pr-[20px] rounded-2xl">
                  <div className="img-caption flex flex-row gap-[40px] items-center">
                    <img src={penguin} alt="" />
                    <div className="caption flex flex-col">
                      <h2 className="font-semibold text-[16px]">Produk Penguin Kecil</h2>
                      <h2 className="mt-[8px] text-[14px]">Warna Hitam</h2>
                      <h2 className="flex flex-row items-center gap-[5px] mt-[40px]">
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                            />
                          </svg>
                        </span>
                        Catatan untuk penjual
                      </h2>
                    </div>
                  </div>
                  <div className="count flex flex-col items-end gap-[50px]">
                    <h2 className="text-[16px] font-bold">Rp.5.000.000</h2>
                    <div className="count-product flex flex-row items-center">
                      <button className="px-[10px] py-[3px] border-2" onClick={incrementCount}>
                        +
                      </button>
                      <h2 className="border-t-2 border-b-2 px-[10px] py-[3px]">{count}</h2>
                      <button className="px-[10px] py-[3px] border-2" onClick={decrementCount}>
                        -
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card-1 flex flex-row items-center justify-between border-2 pr-[20px] rounded-2xl">
                  <div className="img-caption flex flex-row gap-[40px] items-center">
                    <img src={penguin} alt="" />
                    <div className="caption flex flex-col">
                      <h2 className="font-semibold text-[16px]">Produk Penguin Kecil</h2>
                      <h2 className="mt-[8px] text-[14px]">Warna Hitam</h2>
                      <h2 className="flex flex-row items-center gap-[5px] mt-[40px]">
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                            />
                          </svg>
                        </span>
                        Catatan untuk penjual
                      </h2>
                    </div>
                  </div>
                  <div className="count flex flex-col items-end gap-[50px]">
                    <h2 className="text-[16px] font-bold">Rp.460.000</h2>
                    <div className="count-product flex flex-row items-center">
                      <button className="px-[10px] py-[3px] border-2" onClick={incrementCount}>
                        +
                      </button>
                      <h2 className="border-t-2 border-b-2 px-[10px] py-[3px]">{count}</h2>
                      <button className="px-[10px] py-[3px] border-2" onClick={decrementCount}>
                        -
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/*end card*/}
            </div>
            <div className="price flex flex-col border-2 px-[20px] py-[15px] h-[230px] w-[340px] rounded-xl">
              <h2 className="text-[16px] text-[#868686]">Atur Pembelian</h2>
              <h2 className="text-[16px] text-[#868686] mt-[20px]">Total Harga</h2>
              <h2 className="text-[24px] text-[#0092AC] mt-[5px] font-bold">Rp36.550.000</h2>
              <div className="button flex flex-row justify-between items-centerw-full mt-[40px]">
                <Button className="text-[#0092AC] bg-transparent font-semibold border-2 px-[30px]">Chat Penjual</Button>
                <Button className="bg-[#0092AC] text-white font-semibold px-[30px]">+ Keranjang</Button>
              </div>
            </div>
          </div>
          {/*end main*/}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShowCatalog;
