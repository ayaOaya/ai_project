import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br  className="max-md:hidden"/>
        <span className="orange_gradient">
          AI-Powered Prompts
          </span>
        </h1>
        <p className="desc text-center">
          Lorem ipsum amet consectetur, adipisicing elit. Fuga possimus laboriosam, a nulla odio quidem est ea cupiditate nemo sapiente dolorum consequatur, pariatur odit assumenda minima officia dicta. Laudantium,.
        </p>
        <Feed />
    </section>
  ) 
}

export default Home