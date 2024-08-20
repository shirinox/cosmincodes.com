import FadeInContainer from "@/app/components/framer";

const WorkPage = () => {
  return (
    <FadeInContainer className="space-y-8">
      <div className="mb-4">
        <h1 className="text-xl">System Software Engineer</h1>
        <span className="text-neutral-400">Concentrix</span>
      </div>
      <p className="font-light text-neutral-300">
        I am currently working at Concentrix, assisting clients in resolving
        issues with Google Workspace, while working with the team to deliver
        great experiences with Collaboration products.
      </p>
      <ul className="list-disc space-y-2 text-neutral-300 marker:text-neutral-400">
        <li>
          Proficient in working with Google Workspace products focused on
          Collaboration such as Docs, Sheets, Slides, Drive and AppScript.
        </li>
        <li>
          Connecting with the team to provide streamlined experiences for the
          customers, along with improving the product.
        </li>
        <li>
          Overcoming various challenges upon debugging different applications
          written in AppScript along with their according Google Cloud Platform
          projects.
        </li>
      </ul>
    </FadeInContainer>
  );
};

export default WorkPage;
