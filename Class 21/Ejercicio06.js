const students = [
    { 
        nombre: 'Juan Gomez', 
        nota: 7 
    }, 
    { 
        nombre: 'Pedro Rodriguez', 
        nota: 4 
    }, 
    { 
        nombre: 'Roxana García', 
        nota: 8 
    }, 
    { 
        nombre: 'Luciano Lopez', 
        nota: 5 
    }, 
    { 
        nombre: 'Fernanda Gimenez', 
        nota: 6 
    }, 
    { 
        nombre: 'Florencia Martinez', 
        nota: 10 
    }, 
    { 
        nombre: 'Raul Sanchez', 
        nota: 7 
    }, 
    { 
        nombre: 'Sandra Figueroa', 
        nota: 8 
    }
];

const passed = students.filter(function(student) {
    return student.nota >= 7;
});

for(let i = 0; i < passed.length; i++){
    document.write(`<br>Student: ${passed[i].nombre}, Mark: ${passed[i].nota}.`)
};

