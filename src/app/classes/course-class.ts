export class CourseClass {
    public courseId: number | undefined;
    public title: string | undefined;
    public description: string | undefined;
    public duration: number | undefined;
    public lecturer: string | undefined;
    public category: string | undefined;
    public promote: boolean | undefined;
    public courseImage: string | undefined; 
}

export const courseMockup: CourseClass[] = [
    {courseId:1, title:'Microsoft 365',description:'การใช้งานซอฟต์แวร์ในชุด Microsoft 365',duration:30,lecturer:'อ.ฐิดา มั่นคงประสิทธิ์',category:'Basic',promote:false,courseImage:'https://dummyimage.com/200x200/000000/0000ff&text=C1'},
    {courseId:2, title:'Google Workspace',description:'การใช้งานซอฟต์แวร์ในชุด Google Workspace',duration:30,lecturer:'อ.บวรทัต นันทพจน์',category:'Basic',promote:true,courseImage:'https://dummyimage.com/200x200/000000/0000ff&text=C2'},
    {courseId:3, title:'Infographic by Canva',description:'การใช้งานโปรแกรม Canva ในการสร้าง Infographic',duration:20,lecturer:'อ.เอกฉัท จงจรรยา',category:'Graphics',promote:true,courseImage:'https://dummyimage.com/200x200/000000/0000ff&text=C3'},
    {courseId:4, title:'Java',description:'การเขียนโปรแกรมเบื้องต้นด้วย Java',duration:30,lecturer:'อ.นภัสสร รัศมีโชติ',category:'Coding',promote:false,courseImage:'https://dummyimage.com/200x200/000000/0000ff&text=C4'},
    {courseId:5, title:'การวิเคราะห์ข้อมูลเบื้องต้น',description:'การวิเคราะห์ข้อมูลเบื้องต้นด้วย Looker Studio',duration:20,lecturer:'อ.ณัฏฐพล ปัทมเดชา',category:'Other',promote:true,courseImage:'https://dummyimage.com/200x200/000000/0000ff&text=C5'}
    
]