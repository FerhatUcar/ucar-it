import { MotionWrapper } from "@/components/motion-wrapper";

function AboutPage() {
  const paragraphs = [
    "Meet Ferhat, a dynamic individual with a passion for technology, creativity, and a diverse set of skills that make them stand out in both the software development and design realms. As a seasoned software engineer and designer, Ferhat thrives on the ever-evolving landscape of technology.",
    "Their commitment to staying up-to-date with the latest trends and advancements ensures that their work is not only innovative but also at the forefront of industry standards. With a keen eye for detail and a knack for problem-solving, Ferhat crafts software solutions that seamlessly blend functionality and aesthetics.",
    "In addition to their role as a software engineer, Ferhat wears multiple hats, including that of a skilled photographer and videographer. With proficiency in image editors such as Photoshop, Illustrator, and InDesign, they bring a creative touch to their projects, whether it’s designing user interfaces or capturing captivating moments through the lens.",
    "Beyond the digital realm, Ferhat is a globetrotter who finds inspiration in diverse cultures and landscapes. Their role as a photographer allows them to combine their love for technology with a passion for visual storytelling, while video editing further enhances their ability to convey compelling narratives.",
    "Despite their busy professional life, Ferhat finds joy in culinary pursuits. A cooking enthusiast, they love experimenting with flavors and creating delicious meals. At home, they play the role of a loving parent to their daughter, balancing the demands of work and family with grace. An avid movie buff, Ferhat enjoys the immersive experience of watching films in theaters.",
    "The combination of a compelling storyline and cinematic visuals is a source of relaxation and inspiration for them. And let’s not forget their love for coffee, which fuels their creative endeavors and adds an extra layer of enjoyment to each day.",
    "In summary, Ferhat is a multifaceted individual whose passion for technology, design, travel, and family enriches both their professional and personal life. Their journey is a testament to the harmonious blend of creativity and technical expertise, making them a truly unique and inspiring figure in the world of software engineering and design.",
  ];

  const pageParagraphs = paragraphs.map((text, index) => (
    <p key={index} className="text-lg mb-3">
      {text}
    </p>
  ));

  return (
    <MotionWrapper>
      <h1 className="text-6xl font-black mb-3">About me.</h1>
      <div className="w-[75%] xl:w-[50%]">{pageParagraphs}</div>
    </MotionWrapper>
  );
}

export default AboutPage;
