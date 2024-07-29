export default function Home() {
  return (
    <div className="manrope">
      <section className="flex flex-col lg:px-0 px-6 m-auto justify-end max-w-[1110px] h-[284px] mt-[120px] mb-[168px]">
        <div className="flex gap-[30px] justify-center ">
          <div className="bg-[#F1F1F1] flex-grow  h-[204px] rounded-[8px] flex flex-col items-center relative justify-end ">
            <img
              className="w-[215px] absolute -inset-y-[80px]"
              src="src\assets\shared\desktop\image-category-thumbnail-headphones.png"
            ></img>
            <h1 className="font-bold text-[18px] tracking-[1.29px] mb-[15px]">
              HEADPHONES
            </h1>
            <div className="flex items-center gap-[13px] mb-[30px]">
              <h2 className="font-bold tracking-[1px] text-[13px] opacity-50">
                SHOP
              </h2>
              <img className="h-[10px]" src="src\assets\shared\desktop\icon-arrow-right.svg"></img>
            </div>
          </div>
          <div className="bg-[#F1F1F1] flex-grow h-[204px] rounded-[8px] flex flex-col items-center relative justify-end ">
            <img
              className=" w-[215px] absolute -inset-y-[70px]"
              src="src\assets\shared\desktop\image-category-thumbnail-speakers.png"
            ></img>
            <h1 className="font-bold text-[18px] tracking-[1.29px] mb-[15px]">
              SPEAKERS
            </h1>
            <div className="flex items-center gap-[13px] mb-[30px]">
              <h2 className="font-bold tracking-[1px] text-[13px] opacity-50">
                SHOP
              </h2>
              <img className="h-[10px]" src="src\assets\shared\desktop\icon-arrow-right.svg"></img>
            </div>
          </div>
          <div className="bg-[#F1F1F1] flex-grow h-[204px] rounded-[8px] flex flex-col items-center relative justify-end ">
            <img
              className="w-[200px] absolute -inset-y-[55px]"
              src="src\assets\shared\desktop\image-category-thumbnail-earphones.png"
            ></img>
            <h1 className="font-bold text-[18px] tracking-[1.29px] mb-[15px]">
              EARPHONES
            </h1>
            <div className="flex items-center gap-[13px] mb-[30px]">
              <h2 className="font-bold tracking-[1px] text-[13px] opacity-50">
                SHOP
              </h2>
              <img className="h-[10px]" src="src\assets\shared\desktop\icon-arrow-right.svg"></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
