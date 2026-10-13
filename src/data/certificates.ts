export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  description: string;
  skillsLearned: string[];
  image: string;
  url?: string;
  category: string;
};

export const certificatesData: Certificate[] = [
{
  id: "1",
  title: "เกียรติบัตรรางวัลชนะเลิศ ระดับเหรียญทอง การแข่งขันระดับสถานศึกษา",
  issuer: "วิทยาลัยเทคนิคนครศรีธรรมราช",
  issueDate: "December 2021 (17 ธันวาคม พ.ศ. 2564)",
  credentialId: "-",
  description: "มอบให้ นายทินกร รัตนะ ได้รับรางวัลชนะเลิศ ทักษะการเขียนโปรแกรมควบคุมอุปกรณ์ ระดับเหรียญทอง ในการแข่งขันทักษะวิชาชีพ และทักษะพื้นฐาน ระดับสถานศึกษา ประจำปีการศึกษา 2564 ณ วิทยาลัยเทคนิคนครศรีธรรมราช",
  skillsLearned: ["python","Analytical Thinking"],
  image: "/certificates/1.webp",
  url: "",
  category: "Challenge",
},

{
  id: "2",
  title: "เกียรติบัตรรางวัลชนะเลิศ เหรียญทอง ระดับจังหวัด",
  issuer: "สำนักงานอาชีวศึกษาจังหวัดนครศรีธรรมราช",
  issueDate: "December 2021 (22 ธันวาคม พ.ศ. 2564)",
  credentialId: "อศจ.2564.3.5.80.01566",
  description: "มอบให้ นายทินกร รัตนะ จากวิทยาลัยเทคนิคนครศรีธรรมราช ได้รับรางวัลชนะเลิศ เหรียญทอง ทักษะการเขียนโปรแกรมควบคุมอุปกรณ์ ในงานประชุมวิชาการองค์การนักวิชาชีพในอนาคตแห่งประเทศไทย การแข่งขันทักษะวิชาชีพ และทักษะพื้นฐาน ระดับอาชีวศึกษาจังหวัดนครศรีธรรมราช ประจำปีการศึกษา 2564",
  skillsLearned: ["python","Analytical Thinking"],
  image: "/certificates/2.webp",
  url: "",
  category: "Challenge",
},

{
  id: "3",
  title: "เกียรติบัตรรางวัลชนะเลิศ เหรียญทอง ระดับภาค",
  issuer: "สำนักงานคณะกรรมการการอาชีวศึกษา",
  issueDate: "February 2022 (5 กุมภาพันธ์ พ.ศ. 2565)",
  credentialId: "อศภ.๒๕๖๔.๒.๕.๐๒๐๘๗",
  description: "มอบให้ นายทินกร รัตนะ จากวิทยาลัยเทคนิคนครศรีธรรมราช ได้รับรางวัลชนะเลิศ เหรียญทอง ทักษะการเขียนโปรแกรมควบคุมอุปกรณ์ ระดับ ปวช. ในงานประชุมวิชาการองค์การนักวิชาชีพในอนาคตแห่งประเทศไทย ระดับภาค ภาคใต้ ครั้งที่ 32 ประจำปีการศึกษา 2564 ณ จังหวัดตรัง",
  skillsLearned: ["python","Analytical Thinking"],
  image: "/certificates/3.webp",
  url: "",
  category: "Challenge",
},

{
  id: "4",
  title: "เกียรติบัตรรางวัลรองชนะเลิศอันดับ 4 เหรียญเงิน ระดับชาติ",
  issuer: "สำนักงานคณะกรรมการการอาชีวศึกษา",
  issueDate: "February 2022 (24 กุมภาพันธ์ พ.ศ. 2565)",
  credentialId: "อศช.๒๕๖๔.๑.๐๑๐๙",
  description: "มอบให้ นายทินกร รัตนะ จากวิทยาลัยเทคนิคนครศรีธรรมราช ได้รับรางวัลรองชนะเลิศอันดับ 4 เหรียญเงิน ทักษะการเขียนโปรแกรมควบคุมอุปกรณ์ ระดับ ปวช. ในงานประชุมวิชาการองค์การนักวิชาชีพในอนาคตแห่งประเทศไทย (อวท.) ระดับชาติ ครั้งที่ 30 ประจำปีการศึกษา 2564 ณ จังหวัดน่าน และจังหวัดแพร่",
  skillsLearned: ["python","Analytical Thinking"],
  image: "/certificates/4.webp",
  url: "",
  category: "Challenge",
},

{
  id: "5",
  title: "เกียรติบัตรผ่านการอบรมโครงการพัฒนาสมรรถนะ",
  issuer: "สำนักงานคณะกรรมการการอาชีวศึกษา วิทยาลัยเทคนิคนครศรีธรรมราช",
  issueDate: "June 2020 (26 มิถุนายน พ.ศ. 2563)",
  credentialId: "-",
  description: "มอบให้ นายทินกร รัตนะ เนื่องจากผ่านการอบรมโครงการพัฒนาสมรรถนะเตรียมความพร้อมสู่การเรียนอาชีวศึกษา โดยผ่านการประเมินคิดเป็น 74% ณ หอประชุมอินทนิล วิทยาลัยเทคนิคนครศรีธรรมราช",
  skillsLearned: [  "Mathematics","Science","Electronics"],
  image: "/certificates/5.webp",
  url: "",
  category: "Assessment",
},

{
  id: "6",
  title: "เกียรติบัตรการมีส่วนร่วมในโครงการประดิษฐ์ชิ้นงานนวัตกรรม",
  issuer: "วิทยาลัยพยาบาลบรมราชชนนี นครศรีธรรมราช",
  issueDate: "September 2022 (23 กันยายน พ.ศ. 2565)",
  credentialId: "-",
  description: "มอบให้ นายทินกร รัตนะ เพื่อแสดงว่าได้มีส่วนร่วมในการประดิษฐ์ชิ้นงานนวัตกรรม เครื่องบริหารปอด เพื่อการหายใจ (Lung trainer for breathing) ในรายวิชานวัตกรรมทางการพยาบาล (Nursing Innovation) ระหว่างวันที่ 7 - 16 กันยายน พ.ศ. 2565",
  skillsLearned: [  "C Programming","C++"],
  image: "/certificates/6.webp",
  url: "",
  category: "Volunteer Work",
},  

{
  id: "7",
  title: "MUx Honor Code Certificate of Completion",
  issuer: "มหาวิทยาลัยมหิดล (คณะเทคโนโลยีสารสนเทศและการสื่อสาร)",
  issueDate: "October 2022 (19 ตุลาคม พ.ศ. 2565)",
  credentialId: "http://mux.mahidol.ac.th/edxphp/getcer/611f163d22b0957374fc664d216d1317dceedfb7",
  description: "มอบให้ ทินกร รัตนะ ที่ได้เรียนจบหลักสูตร ได้รับผลการเรียนผ่านตามเกณฑ์ และได้รับเกียรติบัตรในรายวิชา การเขียนโปรแกรมคอมพิวเตอร์พื้นฐาน ผ่านระบบออนไลน์ MUx",
  skillsLearned: [  "Basic Computer Programming","Problem Solving","Algorithm Design"],
  image: "/certificates/7.webp",
  url: "",
  category: "Online Examination",
},

{
  id: "8",
  title: "เกียรติบัตรรางวัลรองชนะเลิศ อันดับ 1 ระดับเหรียญทอง สุดยอดนวัตกรรมอาชีวศึกษา",
  issuer: "สำนักงานคณะกรรมการการอาชีวศึกษา",
  issueDate: "April 2021 (8 เมษายน พ.ศ. 2564)",
  credentialId: "-",
  description: "มอบให้ นายทินกร รัตนะ จากวิทยาลัยเทคนิคนครศรีธรรมราช ที่ได้รับรางวัลรองชนะเลิศ อันดับ 1 ระดับเหรียญทอง ประเภทที่ 1 สิ่งประดิษฐ์ด้านพัฒนาคุณภาพชีวิต ผลงาน เครื่องฟื้นฟูกล้ามเนื้อขาอ่อนแรง สำหรับกายภาพบำบัด ในการประกวดสิ่งประดิษฐ์ของคนรุ่นใหม่ ระดับอาชีวศึกษาจังหวัดนครศรีธรรมราช ประจำปีการศึกษา 2563",
  skillsLearned: ["Raspberry Pi", "C#","C++"],
  image: "/certificates/8.webp",
  url: "",
  category: "Development",
},

{
  id: "9",
  title: "Certificate of Achievement (The 1st Runner-up)",
  issuer: "CDG Group ",
  issueDate: "August 2025 (8 สิงหาคม 2568)",
  credentialId: "-",
  description: "มอบให้ ทินกร รัตนะ สำหรับการคว้าตำแหน่งรองชนะเลิศอันดับ 1 (The 1st Runner-up) ในการแข่งขัน CDG Hackathon 2025 x 3 พระจอม จัดขึ้นที่ CDG House กรุงเทพมหานคร",
  skillsLearned: ["PHP", "MYSQL","API"],
  image: "/certificates/9.webp",
  url: "",
  category: "Challenge",
},
];
