export function constructorObjectCourse(code,name,description,duration,typecourse,mode,level,video_preview,thumbnail,professorId){

    const course = {
        code,
        name,
        description,
        duration,
        typecourse,
        mode,
        level,
        video_preview,
        thumbnail,
        professorId
    }

    return course;
}