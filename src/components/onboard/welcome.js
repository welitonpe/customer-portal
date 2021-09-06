import Layout from "../shared/layout";
import Intro from "../../assets/intro.svg";

const Welcome = () => {
  const skip = () => <div></div>;
  return (
    <Layout
      footerProps={{}}
      headerProps={{
        intro: "Hello Sarah,",
        title: "Welcome to Liferay’s Customer Portal",
        subtitle: "",
      }}
    >
      <div className="align-items-center d-flex flex-column justify-content-center mb-5">
        <img
          height={300}
          width={392}
          alt="Costumer Service Intro"
          draggable={false}
          src={Intro}
          className="mt-5 mb-4"
        />

        <p className="text-dark text-center px-2 mx-5 mb-3">
          Let’s download your DXP activation keys, add any team members to your
          projects and give you a quick tour of the space.
        </p>
      </div>
    </Layout>
  );
};

export default Welcome;
