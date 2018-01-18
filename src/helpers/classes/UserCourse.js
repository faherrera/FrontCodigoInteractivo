export default class UserCourse{
    /**
     * 
     * @param {string} Username
     * @param {int} CourseCode
     * @param {bool} Access 
     * @param {bool} isInstructor 
     * 
     */
    constructor(Username, CourseCode, Access, isInstructor){
        this.Username = Username;
        this.CourseCode = CourseCode;
        this.Access = Access;
        this.isInstructor = isInstructor;
    }

    
}