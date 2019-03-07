export class Init{
    load(){
        if(localStorage.getItem('students') === null || localStorage.getItem('students') == undefined)
        {
            console.log('No Students Found...Creating...');
            var students = [];
            localStorage.setItem('students', JSON.stringify(students))
            return 
        }
        else {
            console.log('Found Students...')
        }
            
        }
    }
