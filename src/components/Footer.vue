<template>
  
  <footer className="bg-gray-50" aria-labelledby="footer-heading">
                <h2 id="footer-heading" className="sr-only">
                  Footer
                </h2>
                <div className="mx-auto max-w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                  <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8 xl:col-span-1">
                    <img src="https://www.vectorlogo.zone/logos/accenture/accenture-ar21.svg" 
          
          className=""/>
                      <p className="text-base text-gray-500">
                        Proyecto para accenture
                      </p>
                      <div className="flex space-x-6">
                       
                          <a className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Loram impsum</span>
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                          </a>
                      
                      </div>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                      <div className="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                          <h3 className="text-base font-medium text-gray-900">Visit us</h3>
                          <ul role="list" className="mt-4 space-y-4">
                            
                              <li>
                                
                                 Loram impsum
                                
                              </li>
                           
                          </ul>
                        </div>
                        <div className="mt-12 md:mt-0">
                          <h3 className="text-base font-medium text-gray-900">Contact</h3>
                          <ul role="list" className="mt-4 space-y-4">
                            
                              <li>
                                Loram impsum
                              </li>
                           
                          </ul>
                        </div>
                      </div>
                      <div className="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                          <h3 className="text-base font-medium text-gray-900">Company</h3>
                          <ul role="list" className="mt-4 space-y-4">
                            
                              <li >
                                Loram impsum
                              </li>
                            
                          </ul>
                        </div>
                        <div className="mt-12 md:mt-0">
                          <h3 className="text-base font-medium text-gray-900">Services</h3>
                          <ul role="list" className="mt-4 space-y-4">
                            
                              <li >
                                Loram impsum
                              </li>
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 border-t border-gray-200 pt-8">
                    <p className="text-base text-gray-400 xl:text-center">Accenture 2022</p>
                  </div>
                </div>
              </footer>

</template>
<script>
export default{
    name: 'footer',
    data() {
        return {
            initPage: true,          
        }
    }
}
</script>
<style scoped>
.container-fluid {
  background-color: #63D471;
  padding: 15px 10px;
  margin-top: 721px;
  
}
span :hover {
  cursor: pointer;
}
</style>
