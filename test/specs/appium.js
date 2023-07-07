describe('Open application diet meal apps',() => {
    it('User can open diet meal apps ', async() => {
        await expect($('[text="Welcome..."]')).toHaveText("Welcome...");
        await expect($('[id="com.fghilmany.dietmealapp:id/tv_header_desc"]')).toHaveText("Isi formulir untuk membuat/menambahkan user");      
    })
  })
  
  describe('As a user i can Submit Form Data Application',() => {
    it('User can input field name: Izi', async() => {
        await $('[text="Name"]').setValue("Izi");
    })
    it('As a user i can input field weight: 60', async() => {
        await $('[text="Weight"]').setValue(60);
    })
    it('As a User i can input field height: 165', async() => {
        await $('[text="Height"]').setValue(165);
    })
    it('As a user i can click choose option gender: Male', async() => {
        await $('[id="com.fghilmany.dietmealapp:id/rb_male"]').click();
    })
    it('As a user i can click button "NEXT"', async() => {
        await $('[id="com.fghilmany.dietmealapp:id/bt_next"]').click();
        await expect($('[id="com.fghilmany.dietmealapp:id/tv_header_desc"]')).toHaveText("Isi formulir untuk membuat/menambahkan user"); 
        await expect($('[id="com.fghilmany.dietmealapp:id/title_activity"]')).toHaveText("Aktivitas sehari-hari"); 
    })
  })
  
  describe('As a user Submit Form Activity',() => {
    it('As a User i can choose option aktivitas sehari-hari', async() => {
        await $('[text="Menulis, Mengetik, dsj."]').click();
    })
    it('As a user i can click button "SELESAI"', async() => {
        await $('[id="com.fghilmany.dietmealapp:id/bt_finish"]').click();
        await expect($('[text="Ready to some calories today?"]')).toHaveText("Ready to some calories today?");
    })  
  })