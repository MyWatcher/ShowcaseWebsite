import SectionTitle from "../Common/SectionTitle";
import TeamGroup from "./SingleBlog";
import blogData from "./blogData";

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="L'équipe OWL "
          paragraph=""
          center
        />
        
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((team) => (
            <div key={team.id} className="w-full">
              <TeamGroup team={team} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
