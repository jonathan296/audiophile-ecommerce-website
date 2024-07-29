

export default function Home(){
    return(
    <div>
        <section className="flex flex-col lg:px-0 px-6 m-auto justify-end max-w-[1440px] h-[284px] mt-[120px] mb-[168px]">



        <div className="flex gap-[30px] justify-center  max-w-[1440px] ">

          <div className="bg-[#F1F1F1] flex-grow  h-[204px] rounded-[8px] flex flex-col items-center relative justify-end ">
                <img className="w-[215px] absolute -inset-y-[80px]" src="src\assets\shared\desktop\image-category-thumbnail-headphones.png"></img>
                <h1 className="mb-[15px]">SPEAKERS</h1>
                <h2>SHOP</h2>
          </div>
          <div className="bg-[#F1F1F1] flex-grow h-[204px] rounded-[8px] flex flex-col items-center relative justify-end ">
                <img className=" w-[215px] absolute -inset-y-[70px]" src="src\assets\shared\desktop\image-category-thumbnail-speakers.png"></img>
                <h1 className="mb-[15px]">SPEAKERS</h1>
                <h2>SHOP</h2>
          </div>
          <div className="bg-[#F1F1F1] flex-grow h-[204px] rounded-[8px] flex flex-col items-center relative justify-end ">
                <img className="w-[200px] absolute -inset-y-[65px]" src="src\assets\shared\desktop\image-category-thumbnail-earphones.png"></img>
                <h1 className="mb-[15px]">SPEAKERS</h1>
                <h2>SHOP</h2>
          </div>

          
        </div>
      </section>
    </div>
    )
}

