
import './App.css';
import {useTranslation} from 'react-i18next'
import i18next from 'i18next'
import 'flag-icon-css/css/flag-icon.min.css'
import { useEffect } from 'react';
import cookie from 'js-cookie';

 const languages = [
   {
     code:"ar",
     name:'العربية',
     country_code: "sa",
     dir: "rtl"
   },
   {
     code:'en',
     name:'English',
     country_code:'gb'
   }
 ]  
 
 function App() 
  {  

    const currentLanguageCode = cookie.get('i18next') || 'en'
    const currentLanguage = languages.find(l => l.code === currentLanguageCode)

    useEffect( () => {
        document.body.dir = currentLanguage.dir || 'ltr'
    },[currentLanguage])
    const { t } = useTranslation();  
    return (
    <div className='container'>
        <div className="d-flex justify-content-end">
            <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle mb-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              languages
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {languages.map(({code,name,country_code})=> (
                    <li key={country_code}>
                      <button className="dropdown-item" onClick={() => i18next.changeLanguage(code) } >
                        <span className={`flag-icon flag-icon-${country_code} mx-2`}></span>
                        {name}
                        </button>
                    </li>
              ))}
              
              
            </ul>
          </div>
        </div>

        <div className='d-flex flex-column align-item-start'>
         <h1 className='font-weight-normal mb-3'>
           {t('Welcome_to_react') }
         </h1>
         <p>
           {t('paragraph')}
         </p>

         
        </div>
    </div>
    );
  }

export default App;
