import logo from "../assets/logo.png";
import seven from "../assets/seven.png";
import profile from "../assets/profile.png";
import { Card, CardHeader, CardBody, CardFooter, Image } from "@nextui-org/react";
import read from "../assets/read.png";

import { Button, Input } from "@nextui-org/react";

const Chat = () => {
  return (
    <div className="body-mainboard min-h-screen">
      <div className="nav-mainboard flex flex-row justify-between items-center px-[35px] py-[1px] border-b-2">
        <img src={logo} alt="" className="w-[100px]" />
        <div className="right-side flex flex-row items-center gap-[30px]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
            />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          <img src={seven} alt="" className="w-[40px]" />
        </div>
      </div>
      <div className="main-board-container flex justify-between flex-row items-start">
        <div className="sidebar flex flex-col items-start w-[350px] min-h-[669px] border-r-2">
          <div className="profile-container flex flex-row items-center gap-[30px] border-b-2 py-[10px] justify-center w-full">
            <div className="profile flex flex-row items-center gap-[10px]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 text-[#0092AC] bg-[#A7D5DD] px-[5px] py-[10px] rounded-[50%]">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <h2 className="font-semibold">Seven Stereo</h2>
            </div>
            <div className="button flex flex-row gap-[10px] items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#0092AC]">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#0092AC]">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                />
              </svg>
            </div>
          </div>

          <h2 className="flex flex-row items-center gap-[15px] text-[18px] px-[20px] mt-[10px]">
            {" "}
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </span>
            Dashboard
          </h2>
          <div className="notify flex flex-row items-center justify-between w-full px-[20px] mt-[20px]">
            <h2 className="flex flex-row items-center gap-[15px] text-[18px]">
              {" "}
              <span className="h-[20px] border-2 border-[#0092AC]"></span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>
              </span>
              Chat
            </h2>
            <div className="w-3 h-3 bg-red-700 rounded-full"></div>
          </div>

          <div className="dropdown flex flex-row items-center justify-between w-full px-[20px] mt-[20px]">
            <h2 className="flex flex-row items-center gap-[15px] text-[18px]">
              {" "}
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </span>
              Transaksi
            </h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
          <h2 className="flex flex-row items-center gap-[15px] text-[18px] px-[20px] mt-[20px]">
            {" "}
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
            </span>
            Ulasan
          </h2>
          <div className="dropdown flex flex-row items-center justify-between w-full px-[20px] mt-[20px]">
            <h2 className="flex flex-row items-center gap-[15px] text-[18px]">
              {" "}
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </span>
              Produk
            </h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
          <div className="dropdown flex flex-row items-center justify-between w-full px-[20px] mt-[20px]">
            <h2 className="flex flex-row items-center gap-[15px] text-[18px]">
              {" "}
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                  />
                </svg>
              </span>
              Pinjaman
            </h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
          <div className="dropdown flex flex-row items-center justify-between w-full px-[20px] mt-[20px]">
            <h2 className="flex flex-row items-center gap-[15px] text-[18px]">
              {" "}
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                  />
                </svg>
              </span>
              Penawaran
            </h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
          <h2 className="flex flex-row items-center gap-[15px] text-[18px] px-[20px] mt-[20px]">
            {" "}
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
                />
              </svg>
            </span>
            Ulasan
          </h2>
          <h2 className="flex flex-row items-center gap-[15px] text-[18px] px-[20px] mt-[20px]">
            {" "}
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </span>
            Pengaturan
          </h2>
        </div>
        <div className="main-bar w-full flex-col ml-[35px] mr-[40px] mt-[30px]">
          <div className="headmain flex flex-row items-center justify-between">
            <h2 className="text-[24px] font-bold">Kotak Pesan</h2>
          </div>

          <div className="roomchat w-full border-2 rounded-lg shadow-lg h-[550px] mt-[20px]">
            <div className="roomchat-container flex flex-row">
              <div className="listchat flex flex-col border-r-2 w-[400px] h-[550px]">
                <div className="headchat-list py-[20px] w-[full] flex flex-col items-center justify-center">
                  <Input
                    className="w-[350px] rounded-md"
                    type="text"
                    placeholder="Cari Percakapan"
                    labelPlacement="outside"
                    size="md"
                    endContent={
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                      </svg>
                    }
                  />

                  <tr className="border-1 w-[350px] mt-[20px]"></tr>
                </div>

                <div className="listchat-user flex-col gap-[10px] flex items-center px-[35px]">
                  <div className="card1 flex flex-row items-start justify-between w-full px-[20px] py-[10px] hover:bg-[#ecf3fc] rounded-lg">
                    <div className="profile-name flex flex-row items-center gap-[20px]">
                      <img src={profile} alt="" className="w-[55px]" />
                      <div className="name-chat gap-[20px]">
                        <h2 className="font-semibold">Testing Rommy</h2>
                        <h2 className="font-ligth text-[#868686]">Baik</h2>
                      </div>
                    </div>
                    <div className="time">
                      <h2 className="text-[12px] mt-[9px] text-[#868686]">19:30</h2>
                    </div>
                  </div>
                  <div className="card1 flex flex-row items-start justify-between w-full px-[20px] py-[10px] hover:bg-[#ecf3fc] rounded-lg">
                    <div className="profile-name flex flex-row items-center gap-[20px]">
                      <img src={profile} alt="" className="w-[55px]" />
                      <div className="name-chat gap-[20px]">
                        <h2 className="font-semibold">Staff Core</h2>
                        <h2 className="font-ligth text-[#868686]">Terima kasih</h2>
                      </div>
                    </div>
                    <div className="time">
                      <h2 className="text-[12px] mt-[9px] text-[#868686]">19:30</h2>
                    </div>
                  </div>
                  <div className="card1 flex flex-row items-start justify-between w-full px-[20px] py-[10px] hover:bg-[#ecf3fc] rounded-lg">
                    <div className="profile-name flex flex-row items-center gap-[20px]">
                      <img src={seven} alt="" className="w-[55px]" />
                      <div className="name-chat gap-[20px]">
                        <h2 className="font-semibold">Alvin wibawa</h2>
                        <h2 className="font-ligth text-[#868686]">Product Attachment...</h2>
                      </div>
                    </div>
                    <div className="time">
                      <h2 className="text-[12px] mt-[9px] text-[#868686]">19:30</h2>
                    </div>
                  </div>
                  <div className="card1 flex flex-row items-start justify-between w-full px-[20px] py-[10px] hover:bg-[#ecf3fc] rounded-lg">
                    <div className="profile-name flex flex-row items-center gap-[20px]">
                      <img src={profile} alt="" className="w-[55px]" />
                      <div className="name-chat gap-[20px]">
                        <h2 className="font-semibold">Zuhry</h2>
                        <h2 className="font-ligth text-[#868686]">Assalamualaikum Sell...</h2>
                      </div>
                    </div>
                    <div className="time">
                      <h2 className="text-[12px] mt-[9px] text-[#868686]">19:30</h2>
                    </div>
                  </div>
                  <div className="card1 flex flex-row items-start justify-between w-full px-[20px] py-[10px] hover:bg-[#ecf3fc] rounded-lg">
                    <div className="profile-name flex flex-row items-center gap-[20px]">
                      <img src={seven} alt="" className="w-[55px]" />
                      <div className="name-chat gap-[20px]">
                        <h2 className="font-semibold">Enrico</h2>
                        <h2 className="font-ligth text-[#868686]">Aya Atuh</h2>
                      </div>
                    </div>
                    <div className="time flex flex-col items-center gap-[5px]">
                      <h2 className="text-[12px] mt-[9px] text-[#868686]">19:30</h2>
                      <h2 className="bg-red-600 rounded-[20px] px-[5px] py-[1px] text-[10px] text-white">1</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="personal-chat flex flex-col w-[786px]">
                <div className="chat-header-name flex flex-row justify-between border-b-2 shadow-md py-[15px] items-center px-[30px]">
                  <div className="img-name flex flex-row items-center gap-[20px]">
                    <img src={profile} className="w-[40px]" alt="" />
                    <h2 className="font-bold">Zuhry</h2>
                  </div>

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                  </svg>
                </div>

                <div className="chat flex flex-col bg-[#ecf3fc] gap-[5px] py-[20px] px-[40px] h-[360px] overflow-y-auto">
                  <div className="card-chat flex flex-row-reverse">
                    <Card className="py-2 mt-[10px]">
                      <CardHeader className="pb-0 pt-1 px-4 flex-row items-center justify-between">
                        <h4 className="font-bold text-[16px]">Opal's Store</h4>
                        <div className="time flex flex-row items-center gap-[10px]">
                          <h2 className="text-[12px]">10:14</h2>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                          </svg>
                        </div>
                      </CardHeader>
                      <CardBody className="overflow-visible py-1">
                        <Image alt="Card background" className="object-cover rounded-xl" src="https://nextui.org/images/hero-card-complete.jpeg" width={270} />
                      </CardBody>
                      <CardFooter className="mt-[1px] flex flex-col items-start">
                        <h2 className="text-[12px] font-bold">Katalog Pengadaan Barang PT.PLN(Persero)</h2>
                        <h2 className=" text-[12px] font-light w-[270px]">Temukan barangmu diwebsite kami selangkapnya cek link dibawah ini</h2>
                        <h2 className="text-[12px] font-light underline underline-offset-2 mt-[10px] text-sky-400">https://tiny.cc/produk.kami</h2>
                      </CardFooter>

                      <CardFooter className="flex -mt-[40px] flex-row-reverse">
                        <img src={read} className="w-[17px]" alt="" />
                      </CardFooter>
                    </Card>
                  </div>
                  <div className="card-chat flex flex-row">
                    <Card className="py-2 mt-[10px]">
                      <CardHeader className="pb-0 pt-1 px-4 flex-row items-center justify-between">
                        <h4 className="font-bold text-[16px]">Zuhry</h4>
                        <div className="time flex flex-row items-center gap-[10px]">
                          <h2 className="text-[12px]">10:16</h2>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                          </svg>
                        </div>
                      </CardHeader>
                      <CardFooter className="mt-[1px] flex flex-col items-start">
                        <h2 className="text-[12px] font-medium w-[300px]">Halo assalaamualaikum pak</h2>
                      </CardFooter>

                      <CardFooter className="flex -mt-[30px] flex-row-reverse">
                        <img src={read} className="w-[17px]" alt="" />
                      </CardFooter>
                    </Card>
                  </div>
                  <div className="card-chat flex flex-row">
                    <Card className="py-2 mt-[10px]">
                      <CardHeader className="pb-0 pt-1 px-4 flex-row items-center justify-between">
                        <h4 className="font-bold text-[16px]">Zuhry</h4>
                        <div className="time flex flex-row items-center gap-[10px]">
                          <h2 className="text-[12px]">10:16</h2>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                          </svg>
                        </div>
                      </CardHeader>
                      <CardFooter className="mt-[1px] flex flex-col items-start">
                        <h2 className="text-[12px] font-medium w-[300px]">Ingin bertanya menganai pengadaan barang yang akan dilakukan 18 September bulan depan</h2>
                      </CardFooter>

                      <CardFooter className="flex -mt-[30px] flex-row-reverse">
                        <img src={read} className="w-[17px]" alt="" />
                      </CardFooter>
                    </Card>
                  </div>
                </div>

                <div className="auto-text flex flex-row items-center gap-[10px] px-[20px] py-[10px] border-b-2">
                  <Button size="sm" className="bg-transparent border-1 border-[#3EB6BA]">
                    Waalaikumsalam
                  </Button>
                  <Button size="sm" className="bg-transparent border-1 border-[#3EB6BA]">
                    Selamat Pagi
                  </Button>
                  <Button size="sm" className="bg-transparent border-1 border-[#3EB6BA]">
                    Ada yang bisa dibantu?
                  </Button>
                  <Button size="sm" className="bg-transparent border-1 border-[#3EB6BA]">
                    Dengan senang hati
                  </Button>
                </div>
                <div className="inputchat flex flex-row items-center gap-[10px] px-[20px] py-[10px]">
                  <div className="input-mass flex justify-between w-[700px] border-2 h-[40px] pr-[10px] rounded-lg">
                    <input type="text" placeholder="Text..." className="w-[600px] px-[10px] rounded-lg" />
                    <div className="emoticon flex flex-row items-center gap-[20px]">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-[#868686] ">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                        />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-[#868686]">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="send p-[7px] rounded-lg bg-[#e4e4e4]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-slate-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
