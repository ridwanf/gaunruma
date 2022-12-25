export default function Store() {
  return (
    <section className="bg-white py-8">

      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">

        <nav id="store" className="w-full z-30 top-0 px-6 py-1">
          <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">

            <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
              Store
            </a>

            <div className="flex items-center" id="store-nav-content">
            </div>
          </div>
        </nav>

        <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
          <a href="https://www.tokopedia.com/gaunruma">
            <img className="hover:grow hover:shadow-lg" src="/images/tokped.png" style={{ height: "250px" }} />
            <div className="pt-3 flex items-center justify-between">
              <p className="">Tokopedia Gaun Ruma</p>
            </div>
          </a>
        </div>
        <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
          <a href="https://shopee.co.id/gaunruma1212">
            <img className="hover:grow hover:shadow-lg" src="/images/shopee.png" style={{ height: "250px" }} />
            <div className="pt-3 flex items-center justify-between">
              <p className="">Shopee Gaun Ruma</p>
            </div>
          </a>
        </div>
        <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
          <a href="https://www.instagram.com/gaun_ruma/">
            <img className="hover:grow hover:shadow-lg" src="/images/instagram.png" style={{ height: "250px" }} />
            <div className="pt-3 flex items-center justify-between">
              <p className="">Instagram Gaun Ruma</p>
            </div>
          </a>
        </div>
        <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
          <a href="https://www.tiktok.com/@gaunruma">
            <img className="hover:grow hover:shadow-lg" src="/images/tiktok.png" style={{ height: "250px" }} />
            <div className="pt-3 flex items-center justify-between">
              <p className="">Tiktok Gaun Ruma</p>
            </div>
          </a>
        </div>
      </div>

    </section>
  )
}