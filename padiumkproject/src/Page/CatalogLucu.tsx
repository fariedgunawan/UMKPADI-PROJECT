import { Input, Button, Image } from "@nextui-org/react";
import logo from "../assets/logo.png";
import seven from "../assets/seven.png";
import profile from "../assets/profile.jpg";
import telkom from "../assets/telkom.png";
import star from "../assets/star.png";
import penguin from "../assets/penguin.png";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { Pagination } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

const CatalogLucu = () => {
  return (
    <div className="bg-white text-black min-h-screen font-nunito">
      <div className="body-landing">
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

        {/*headbar*/}
        <div className="headbar-body mx-[45px] px-[25px] py-[20px] flex flex-row items-center justify-between border-1 border-slate-300 rounded-lg">
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
                  <Image src={star} alt="star" className="w-[35px]" />
                  <h2 className="tetx-[14px]">0</h2>
                </div>
                <h2 className="text-[12px] font-medium mt-[10px]">Rating & Ulasan</h2>
              </div>
            </div>
            <Button className="bg-transparent text-[#0092AC] border-1 font-semibold rounded-lg border-[#0092AC] ">
              {" "}
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>
              </span>
              Chat Penjual
            </Button>
          </div>
        </div>
        {/*end of headbar*/}

        {/*start content*/}
        <div className="content-container px-[45px] mt-[20px] flex flex-row items-start justify-between gap-[20px]">
          {/*filter*/}
          <div className="filter-container flex flex-col w-[230px]">
            <div className="filter-bar flex flex-col border-1 border-slate-300 py-[10px] rounded-md">
              <h2 className="text-[16px] font-semibold text-black px-[15px]">Filter</h2>
              <div className="separator h-[1px] w-full mt-[10px] bg-slate-300" />
              <Accordion isCompact>
                <AccordionItem key="1" aria-label="Accordion 1" title="Kategori" className="text-[20px] text-[#555353] px-[8px] mt-[10px] ">
                  <h2 className="text-[16px]">Penguin Lucu</h2>
                  <h2 className="text-[16px] mt-[10px]">Penguin Jahat</h2>
                  <h2 className="text-[16px] mt-[10px]">Semua Kategori</h2>
                </AccordionItem>
              </Accordion>
              <Accordion isCompact>
                <AccordionItem key="2" aria-label="Accordion 2" title="Rentang Harga" className="text-[20px] text-[#555353] px-[8px] mt-[10px] ">
                  <h2 className="text-[16px]">Harga</h2>
                </AccordionItem>
              </Accordion>
              <Accordion isCompact>
                <AccordionItem key="3" aria-label="Accordion 3" title="Stok Produk" className="text-[20px] text-[#555353] px-[8px] mt-[10px] ">
                  <h2 className="text-[16px]">Stok</h2>
                </AccordionItem>
              </Accordion>
              <Accordion isCompact>
                <AccordionItem key="4" aria-label="Accordion 4" title="Setifikat" className="text-[20px] text-[#555353] px-[8px] mt-[10px] ">
                  <h2 className="text-[16px]">Sertifikat</h2>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="filter-bar flex flex-col mt-[20px] border-1 border-slate-300 py-[10px] rounded-md">
              <h2 className="text-[16px] font-semibold text-black px-[15px]">Katalog Toko</h2>
              <div className="separator h-[1px] w-full mt-[10px] bg-slate-300" />
              <h2 className="text-[16px] text-black px-[15px] mt-[10px] flex flex-row justify-between items-center">
                {" "}
                <span className="border-2 border-[#0092AC] h-[20px]"></span>Katalog Penguin Lucu{" "}
              </h2>
              <h2 className="text-[16px] text-black px-[15px] mt-[15px] ">Katalog Penguin Jahat </h2>
            </div>
            {/*end filter*/}
          </div>

          {/*search and show katalog*/}
          <div className="catalog flex flex-col w-full mb-[50px]">
            <div className="search-catalog flex flex-row items-center gap-[60px]">
              <Input
                type="text"
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
              <div className="urutkan flex flex-row items-center">
                <h2 className="mr-[20px] text-black">Urutkan:</h2>
                <h2 className="flex-row flex justify-between px-[10px] py-[10px] text-white items-center w-[200px] border-2 rounded-md">
                  Urutkan{" "}
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-black ">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </h2>
              </div>
            </div>

            <div className="show-catalog mt-[20px]">
              <h2 className="text-[#555353] font-semibold">Katalog Penguin Lucu</h2>
              <div className="show-catalog-container flex justify-between flex-wrap gap-[10px] mt-[20px]">
                <Card shadow="sm" isPressable radius="sm">
                  <CardBody className="overflow-visible p-0">
                    <Image alt="penguin" className="w-full object-cover h-[140px]" src={penguin} />
                  </CardBody>
                  <CardFooter className="text-small w-[150px]">
                    <div className="text flex flex-col">
                      <h2 className="text-black text-left">Penguin Joged ini adalah penguin</h2>
                      <h2 className="text-black text-left mt-[5px]">Rp50.000</h2>
                      <h2 className="text-black text-left mt-[10px] flex flex-row items-center">
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                          </svg>
                        </span>
                        Kab Sidoarjo
                      </h2>
                      <h2 className="text-black text-left mt-[10px]">PDN Non-PKP</h2>
                    </div>
                  </CardFooter>
                </Card>
                <Card shadow="sm" isPressable radius="sm">
                  <CardBody className="overflow-visible p-0">
                    <Image alt="penguin" className="w-full object-cover h-[140px]" src={penguin} />
                  </CardBody>
                  <CardFooter className="text-small w-[150px]">
                    <div className="text flex flex-col">
                      <h2 className="text-black text-left">Penguin Joged ini adalah penguin</h2>
                      <h2 className="text-black text-left mt-[5px]">Rp50.000</h2>
                      <h2 className="text-black text-left mt-[10px] flex flex-row items-center">
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                          </svg>
                        </span>
                        Kab Sidoarjo
                      </h2>
                      <h2 className="text-black text-left mt-[10px]">PDN Non-PKP</h2>
                    </div>
                  </CardFooter>
                </Card>
                <Card shadow="sm" isPressable radius="sm">
                  <CardBody className="overflow-visible p-0">
                    <Image alt="penguin" className="w-full object-cover h-[140px]" src={penguin} />
                  </CardBody>
                  <CardFooter className="text-small w-[150px]">
                    <div className="text flex flex-col">
                      <h2 className="text-black text-left">Penguin Joged ini adalah penguin</h2>
                      <h2 className="text-black text-left mt-[5px]">Rp50.000</h2>
                      <h2 className="text-black text-left mt-[10px] flex flex-row items-center">
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                          </svg>
                        </span>
                        Kab Sidoarjo
                      </h2>
                      <h2 className="text-black text-left mt-[10px]">PDN Non-PKP</h2>
                    </div>
                  </CardFooter>
                </Card>
                <Card shadow="sm" isPressable radius="sm">
                  <CardBody className="overflow-visible p-0">
                    <Image alt="penguin" className="w-full object-cover h-[140px]" src={penguin} />
                  </CardBody>
                  <CardFooter className="text-small w-[150px]">
                    <div className="text flex flex-col">
                      <h2 className="text-black text-left">Penguin Joged ini adalah penguin</h2>
                      <h2 className="text-black text-left mt-[5px]">Rp50.000</h2>
                      <h2 className="text-black text-left mt-[10px] flex flex-row items-center">
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                          </svg>
                        </span>
                        Kab Sidoarjo
                      </h2>
                      <h2 className="text-black text-left mt-[10px]">PDN Non-PKP</h2>
                    </div>
                  </CardFooter>
                </Card>
                <Card shadow="sm" isPressable radius="sm">
                  <CardBody className="overflow-visible p-0">
                    <Image alt="penguin" className="w-full object-cover h-[140px]" src={penguin} />
                  </CardBody>
                  <CardFooter className="text-small w-[150px]">
                    <div className="text flex flex-col">
                      <h2 className="text-black text-left">Penguin Joged ini adalah penguin</h2>
                      <h2 className="text-black text-left mt-[5px]">Rp50.000</h2>
                      <h2 className="text-black text-left mt-[10px] flex flex-row items-center">
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                          </svg>
                        </span>
                        Kab Sidoarjo
                      </h2>
                      <h2 className="text-black text-left mt-[10px]">PDN Non-PKP</h2>
                    </div>
                  </CardFooter>
                </Card>
                <Card shadow="sm" isPressable radius="sm">
                  <CardBody className="overflow-visible p-0">
                    <Image alt="penguin" className="w-full object-cover h-[140px]" src={penguin} />
                  </CardBody>
                  <CardFooter className="text-small w-[150px]">
                    <div className="text flex flex-col">
                      <h2 className="text-black text-left">Penguin Joged ini adalah penguin</h2>
                      <h2 className="text-black text-left mt-[5px]">Rp50.000</h2>
                      <h2 className="text-black text-left mt-[10px] flex flex-row items-center">
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                          </svg>
                        </span>
                        Kab Sidoarjo
                      </h2>
                      <h2 className="text-black text-left mt-[10px]">PDN Non-PKP</h2>
                    </div>
                  </CardFooter>
                </Card>
                <Card shadow="sm" isPressable radius="sm">
                  <CardBody className="overflow-visible p-0">
                    <Image alt="penguin" className="w-full object-cover h-[140px]" src={penguin} />
                  </CardBody>
                  <CardFooter className="text-small w-[150px]">
                    <div className="text flex flex-col">
                      <h2 className="text-black text-left">Penguin Joged ini adalah penguin</h2>
                      <h2 className="text-black text-left mt-[5px]">Rp50.000</h2>
                      <h2 className="text-black text-left mt-[10px] flex flex-row items-center">
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                          </svg>
                        </span>
                        Kab Sidoarjo
                      </h2>
                      <h2 className="text-black text-left mt-[10px]">PDN Non-PKP</h2>
                    </div>
                  </CardFooter>
                </Card>
                <Card shadow="sm" isPressable radius="sm">
                  <CardBody className="overflow-visible p-0">
                    <Image alt="penguin" className="w-full object-cover h-[140px]" src={penguin} />
                  </CardBody>
                  <CardFooter className="text-small w-[150px]">
                    <div className="text flex flex-col">
                      <h2 className="text-black text-left">Penguin Joged ini adalah penguin</h2>
                      <h2 className="text-black text-left mt-[5px]">Rp50.000</h2>
                      <h2 className="text-black text-left mt-[10px] flex flex-row items-center">
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                          </svg>
                        </span>
                        Kab Sidoarjo
                      </h2>
                      <h2 className="text-black text-left mt-[10px]">PDN Non-PKP</h2>
                    </div>
                  </CardFooter>
                </Card>
                <Card shadow="sm" isPressable radius="sm">
                  <CardBody className="overflow-visible p-0">
                    <Image alt="penguin" className="w-full object-cover h-[140px]" src={penguin} />
                  </CardBody>
                  <CardFooter className="text-small w-[150px]">
                    <div className="text flex flex-col">
                      <h2 className="text-black text-left">Penguin Joged ini adalah penguin</h2>
                      <h2 className="text-black text-left mt-[5px]">Rp50.000</h2>
                      <h2 className="text-black text-left mt-[10px] flex flex-row items-center">
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                          </svg>
                        </span>
                        Kab Sidoarjo
                      </h2>
                      <h2 className="text-black text-left mt-[10px]">PDN Non-PKP</h2>
                    </div>
                  </CardFooter>
                </Card>
                <Card shadow="sm" isPressable radius="sm">
                  <CardBody className="overflow-visible p-0">
                    <Image alt="penguin" className="w-full object-cover h-[140px]" src={penguin} />
                  </CardBody>
                  <CardFooter className="text-small w-[150px]">
                    <div className="text flex flex-col">
                      <h2 className="text-black text-left">Penguin Joged ini adalah penguin</h2>
                      <h2 className="text-black text-left mt-[5px]">Rp50.000</h2>
                      <h2 className="text-black text-left mt-[10px] flex flex-row items-center">
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                          </svg>
                        </span>
                        Kab Sidoarjo
                      </h2>
                      <h2 className="text-black text-left mt-[10px]">PDN Non-PKP</h2>
                    </div>
                  </CardFooter>
                </Card>
                <Card shadow="sm" isPressable radius="sm">
                  <CardBody className="overflow-visible p-0">
                    <Image alt="penguin" className="w-full object-cover h-[140px]" src={penguin} />
                  </CardBody>
                  <CardFooter className="text-small w-[150px]">
                    <div className="text flex flex-col">
                      <h2 className="text-black text-left">Penguin Joged ini adalah penguin</h2>
                      <h2 className="text-black text-left mt-[5px]">Rp50.000</h2>
                      <h2 className="text-black text-left mt-[10px] flex flex-row items-center">
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                          </svg>
                        </span>
                        Kab Sidoarjo
                      </h2>
                      <h2 className="text-black text-left mt-[10px]">PDN Non-PKP</h2>
                    </div>
                  </CardFooter>
                </Card>

                <Card shadow="sm" isPressable radius="sm">
                  <CardBody className="overflow-visible p-0">
                    <Image alt="penguin" className="w-full object-cover h-[140px]" src={penguin} />
                  </CardBody>
                  <CardFooter className="text-small w-[150px]">
                    <div className="text flex flex-col">
                      <h2 className="text-black text-left">Penguin Joged ini adalah penguin</h2>
                      <h2 className="text-black text-left mt-[5px]">Rp50.000</h2>
                      <h2 className="text-black text-left mt-[10px] flex flex-row items-center">
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                          </svg>
                        </span>
                        Kab Sidoarjo
                      </h2>
                      <h2 className="text-black text-left mt-[10px]">PDN Non-PKP</h2>
                    </div>
                  </CardFooter>
                </Card>
                <Card shadow="sm" isPressable radius="sm">
                  <CardBody className="overflow-visible p-0">
                    <Image alt="penguin" className="w-full object-cover h-[140px]" src={penguin} />
                  </CardBody>
                  <CardFooter className="text-small w-[150px]">
                    <div className="text flex flex-col">
                      <h2 className="text-black text-left">Penguin Joged ini adalah penguin</h2>
                      <h2 className="text-black text-left mt-[5px]">Rp50.000</h2>
                      <h2 className="text-black text-left mt-[10px] flex flex-row items-center">
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                          </svg>
                        </span>
                        Kab Sidoarjo
                      </h2>
                      <h2 className="text-black text-left mt-[10px]">PDN Non-PKP</h2>
                    </div>
                  </CardFooter>
                </Card>
                <Card shadow="sm" isPressable radius="sm">
                  <CardBody className="overflow-visible p-0">
                    <Image alt="penguin" className="w-full object-cover h-[140px]" src={penguin} />
                  </CardBody>
                  <CardFooter className="text-small w-[150px]">
                    <div className="text flex flex-col">
                      <h2 className="text-black text-left">Penguin Joged ini adalah penguin</h2>
                      <h2 className="text-black text-left mt-[5px]">Rp50.000</h2>
                      <h2 className="text-black text-left mt-[10px] flex flex-row items-center">
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                          </svg>
                        </span>
                        Kab Sidoarjo
                      </h2>
                      <h2 className="text-black text-left mt-[10px]">PDN Non-PKP</h2>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </div>
            {/*count*/}
            <div className="count-page flex justify-center mt-[50px]">
              <Pagination showControls total={10} initialPage={1} size="md" />
            </div>
            {/*end of count*/}
          </div>
          {/*end search and show katalog*/}
        </div>

        {/*end start content*/}
      </div>
    </div>
  );
};

export default CatalogLucu;
