import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/"

export default function useSkills(){
    
    const skills= ref([]);
    const skill= ref([]);
    const errors= ref({});
    const router =useRouter();

    const getSkills = async() => {
        
            const response = await axios.get("skills");
            skills.value =response.data.data;
       
        
    };

    const getSkill = async(id) => {
        try{ 
            const response = await axios.get("skills/" + id);
            skill.value =response.data.data;
        }catch(error){
            if(error.response.status == 404){
               alert(error.response.data.message);
               await router.push({name:"SkillIndex"});
            }
        }  
    };

    const StoreSkill = async(data) => {
        try{
            await axios.post("skills", data);
            await router.push({name:"SkillIndex"});
           
        }catch(error){
            if(error.response.status == 422){
                errors.value = error.response.data.errors;
            }
        }
       
    };

    const UpdateSkill = async(id) =>{
        try{
              await axios.put("skills/" + id, skill.value)
              await router.push({name:"SkillIndex"});
        }catch(error){
           
            if(error.response.status == 422){
                errors.value = error.response.data.errors;
            }
         
        }
    };
      
    const DestroySkill = async(id) => {
        if(!window.confirm("Are you sure you want to Delete?")){
            return;
        }
        await axios.delete("skills/" + id);
        await getSkills();
    }



return {
skill,
skills,
getSkill,
getSkills,
StoreSkill,
UpdateSkill,
DestroySkill,
errors
};
}