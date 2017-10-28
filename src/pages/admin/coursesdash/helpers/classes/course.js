
export function Course(code, name, description, duration, typecourse, mode, level, video_preview, nameImage,imageBase64, professorId) {
      
    this.code = code;
    this.name = name;
    this.description = description;
    this.duration = duration;
    this.typecourse = typecourse;
    this.mode = mode;
    this.level = level;
    this.video_preview = video_preview; 
    this.thumbnail = nameImage;
    this.imageBase64 = imageBase64;
    this.professorId = professorId;
    
}
