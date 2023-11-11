<script>
    export var data;
    console.log('Data------------------------------');
    console.log(data)
    //
    import { t, translations } from '$lib/languages/translations';
    //console.log('Traductions-----------------------');
    //console.log(translations.get());
    //
    import projects    from "$lib/data/projects.js";
    import clients     from "$lib/data/clients.js";
    import nav_data    from '$lib/data/nav_data.js';
    import footer_data from "$lib/data/footer_data.js"
    import tools       from "$lib/data/tools.js";
    import Button from "$lib/ui/basics/button.svelte"
    //
    import { onMount }     from 'svelte';
    import { browser }     from '$app/environment';
    //
    import { IsTopOfPage } from '$lib/helpers/dom_scroll_helper'
    import { findParent, hasClass, addClass, removeClass }  from '$lib/helpers/dom_helper'
    //
    import Cropper from "cropperjs";
    import 'cropperjs/dist/cropper.css';
    //
    import Top_banner from "$lib/ui/header/top_banner.svelte";
    import Header from "$lib/ui/header/header.svelte";
    import Hero   from "$lib/ui/sections/section_hero.svelte";
    import Section_skills   from "$lib/ui/sections/section_skills.svelte";
    import Skill   from '$lib/ui/cards/skill.svelte';
    import Section_portfolio  from "$lib/ui/sections/section_portfolio.svelte";
    import Section_cv         from "$lib/ui/sections/section_cv.svelte";
    import Section_tools      from "$lib/ui/sections/section_tools.svelte";
    import Section_clients    from "$lib/ui/sections/section_clients.svelte";
    import Language_picker from "$lib/ui/utils/language_picker.svelte";
    import Footer from "$lib/ui/footer/footer.svelte";
    import Go_to_top_button from '$lib/ui/utils/go_to_top.svelte';
    import { setTheme } from "$lib/helpers/theme_helper.js"
    import { getTodayData, setUserDateCookie } from "$lib/helpers/date_helper.js"
    import { getThemeFromDate } from "$lib/helpers/theme_helper.js"
    import {setCookie, getCookie} from "$lib/helpers/cookies_helper.js"
    //
    var fonts = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap';
    //
    var elCropperFileInput;
    var elCropper;
    var elwrapperNoImg;
    var elWrapperCropper;
    var elPreviewCont;
    //
    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
    });
    //
    async function fileToBase64(elFile) {
        const file = elFile.files[0];
        //console.log(await toBase64(file));
        return await toBase64(file);
    }
    //
    function selectFile(){
        document.querySelector('#cropper_file').click();
    }
    //
    function dataURLtoFile(dataurl, filename) {
        var arr   = dataurl.split(',');
        var mime  = arr[0].match(/:(.*?);/)[1];
        var bstr  = atob(arr[arr.length - 1]);
        var n     = bstr.length;
        var u8arr = new Uint8Array(n);
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, {type:mime});
    }
    //
    var flipYValue;
    var flipXValue;
    //
    var CropperOptions = {
        dragMode: 'move',
        preview: '.img_preview',
        viewMode: 2,
        modal: false,
        background: false,
        autoCrop: true,
        ready: function(){
            // Set flip and rotate to 0
            flipYValue = 1;
            flipXValue = 1;
            //rotateOrientation = rotateValues["state1"];
            //
            document.addEventListener('destroy_cropper', (e) => {
                try {
                    this.cropper.destroy();   
                } catch (error) {
                    console.log(error)
                }
            })
        },
    };
    function sizeCropperWrapper(elCropperCont, elParent){
        console.log(elCropperCont);
        elCropperCont.style.width  = (elParent.offsetWidth  - 40).toString()+'px';
        console.log(elCropperCont.offsetWidth);
        elCropperCont.style.height = (elParent.offsetHeight - 40).toString()+'px';
        console.log('elCropperCont width', elCropperCont.style.width);
    }
    //
    onMount(() => {
        if(browser){
            var elBody         = document.querySelector('body');
            var elListButtons  = document.querySelectorAll('.button');
            var elUploadImgBtn = document.querySelector('#upload_file_btn');
            //
            var stateActiveCropper = false;
            function setStateActiveCropper(state){
                if(state === false){
                    addClass(elWrapperCropper, 'hidden');
                    removeClass(elwrapperNoImg, 'hidden');
                    elListButtons.forEach(element => {
                        addClass(element, 'forbidden_button');
                    });
                    removeClass(elUploadImgBtn, 'forbidden_button');
                    addClass(elUploadImgBtn, 'click_me');
                }
                if(state === true){
                    addClass(elwrapperNoImg, 'hidden');
                    removeClass(elWrapperCropper, 'hidden');
                    sizeCropperWrapper(elWrapperCropper, document.querySelector('.cropper_wrapper'));
                    elListButtons.forEach(element => {
                        removeClass(element, 'forbidden_button');
                    });
                    removeClass(elUploadImgBtn, 'click_me');
                }
            }
            setStateActiveCropper(stateActiveCropper);
            async function handleFileChange(CropperOptions){
                elCropperFileInput.addEventListener('change', async (e) => {
                    console.log('change trigger');
                    var base64Img = await fileToBase64(elCropperFileInput);
                    elCropper.setAttribute('src', base64Img);
                    //
                    const eVDestroyCropper = new Event("destroy_cropper");
                    document.dispatchEvent(eVDestroyCropper);
                    //
                    //
                    stateActiveCropper = true;
                    setStateActiveCropper(stateActiveCropper);
                    const cropper = new Cropper(elCropper, CropperOptions);
                    //
                })
            }
            //
            elBody.setAttribute('is_top_of_page', IsTopOfPage());
            document.addEventListener('scroll', function(){
                elBody.setAttribute('is_top_of_page', IsTopOfPage());
            });
            //
            setTheme(data.theme, elBody, document.querySelectorAll('[toggle_theme]'));
            //
            if(typeof data.cookie_user_date === 'undefined' && typeof data.cookie_prefered_theme === 'undefined'){
                setTheme(getThemeFromDate(), elBody, document.querySelectorAll('[toggle_theme]'));
            }
            // Get user dateTime on landing and when leaving the page
            setUserDateCookie();
            window.onbeforeunload = function(){
                setUserDateCookie();
            };
            //
            document.querySelector('#upload_file_btn').addEventListener('click', (e) => {
                e.preventDefault();
                selectFile();
            })
            //
            document.querySelector('#get_img_btn').addEventListener('click', (e) => {
                e.preventDefault();
                console.log('click on #get_img_btn')
                function getImage(cropper){
                    var canvas = cropper.getCroppedCanvas();
                    var base64Image = canvas.toDataURL();
                    console.log(base64Image);
                    //
                    return base64Image;
                };
                var base64Img = getImage(elCropper.cropper);
                var file = dataURLtoFile(base64Img, 'Cropped image');
                console.log(file);
                //
                var url = window.URL.createObjectURL(file);
                jQuery('body').append('<a export_window class="hidden"></a>');
                jQuery('a[export_window]').attr('href', url);
                jQuery('a[export_window]').attr('download', 'Cropped image');
                jQuery('a[export_window]')[0].click();
                jQuery('a[export_window]')[0].remove();
            })
            //
            function resetCropper(){
                const eVDestroyCropper = new Event("destroy_cropper");
                document.dispatchEvent(eVDestroyCropper);
                const cropper = new Cropper(elCropper, CropperOptions);
            };
            document.querySelector('#reset_changes_btn').addEventListener('click', (e) => {
                e.preventDefault();
                resetCropper();
            })
            //
            handleFileChange(CropperOptions);
            //
            // Apply color filters to the canvas
            function applyFilters(p_filters){   
                // No zoom then set cropzone to 100% width and height
                elCropper.cropper.zoom(-10);
                var imageData  = elCropper.cropper.getImageData();
                elCropper.cropper.setData({
                    x: 0,
                    y: 0,
                    width: imageData['naturalWidth'],
                    height: imageData['naturalHeight'],
                    rotate: 0
                });
                //
                let canvasSource = elCropper.cropper.getCroppedCanvas();
                let result = canvasSource.toDataURL('image/png');
                // Load the image url into an image object
                const image = new Image();
                image.src   = result;
                //
                const canvas = document.createElement( 'canvas' );
                let ctx = canvas.getContext('2d');
                //
                image.onload = () => {        
                    canvas.width  = image.width;
                    canvas.height = image.height;

                    // Apply css filters here
                    ctx.filter = p_filters;
                    ctx.drawImage( image, 0, 0, canvas.width, canvas.height );
                    
                    // Set back canvas into destination as a base64 image URL
                    let resulting_data_uri = canvas.toDataURL( 'image/jpeg' );
                    elCropper.setAttribute("src", resulting_data_uri);
                    elCropper.cropper.replace(resulting_data_uri);
                };
            };
            //
            document.querySelector('#zoom_in_btn').addEventListener('click', (e) => {
                e.preventDefault();
                elCropper.cropper.zoom(0.1);
            })
            document.querySelector('#zoom_out_btn').addEventListener('click', (e) => {
                e.preventDefault();
                elCropper.cropper.zoom(-0.1);
            })
            document.querySelector('#rotate_plus_btn').addEventListener('click', (e) => {
                e.preventDefault();
                elCropper.cropper.rotate(45);
            })
            document.querySelector('#rotate_less_btn').addEventListener('click', (e) => {
                e.preventDefault();
                elCropper.cropper.rotate(-45);
            })
            document.querySelector('#flip_x_btn').addEventListener('click', (e) => {
                e.preventDefault();
                if(flipYValue === 1) {flipYValue = -1}
                else{flipYValue = 1}
                elCropper.cropper.scale(flipYValue, flipXValue);
            })
            document.querySelector('#flip_y_btn').addEventListener('click', (e) => {
                e.preventDefault();
                if(flipXValue === 1) {flipXValue = -1}
                else{flipXValue = 1}
                elCropper.cropper.scale(flipYValue, flipXValue);
            })
            document.querySelector('#brightness_plus_btn').addEventListener('click', (e) => {
                e.preventDefault();
                applyFilters('brightness(1.25)');
            })
            document.querySelector('#brightness_less_btn').addEventListener('click', (e) => {
                e.preventDefault();
                applyFilters('brightness(0.8)');
            })
            document.querySelector('#contrast_plus_btn').addEventListener('click', (e) => {
                e.preventDefault();
                applyFilters('contrast(1.25)');
            })
            document.querySelector('#contrast_less_btn').addEventListener('click', (e) => {
                e.preventDefault();
                applyFilters('contrast(0.8)');
            })
            document.querySelector('#invert_btn').addEventListener('click', (e) => {
                e.preventDefault();
                applyFilters('invert()');
            })
            var isGrey = false;
            document.querySelector('#grayscale_btn').addEventListener('click', (e) => {
                e.preventDefault();
                if(isGrey === false) {applyFilters('grayscale()');}
                if(isGrey === true)  {resetCropper();}
                isGrey = !isGrey
            })
        }
    });
    </script>
     
    <svelte:head>
        <link rel="stylesheet" href="/css/variables.css?11231">
        <link rel="stylesheet" href="/css/reset.css?11231">
        <link rel="stylesheet" href="/css/styles.css?11231">
    
        <title>Free Image Cropper Online</title>
        <meta name="description" t="seo_description" content="">
    
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link async href="{fonts}" rel="stylesheet">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/cropper/2.3.3/cropper.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/cropper/2.3.3/cropper.css" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="shortcut icon" type="image/x-icon" href="/img/logos/logo_jm.png" />
    </svelte:head>
    
    
    
    <!-- 
    <Top_banner />
    <Header 
        nav_items={nav_data}
        logo="/img/logos/logo_jm.png" 
        logo_vertical_align="bottom"
    >
    <Language_picker lang={data.lang} slot="languagePicker" />
    </Header>
    <slot />
    <Footer 
        footer_data={footer_data}
        logo="/img/logos/logo_jm.png"
        description={$t('c.short_description')}
        copyright="2023. All rights reserved, by Jimmy Mostovoi."
    >
    <Language_picker lang={data.lang} slot="languagePicker" />
    </Footer>
    <Go_to_top_button />
    --> 
    
    <input bind:this={elCropperFileInput} id="cropper_file" class="hidden" type="file">
    <main>
        <div class="working_container">
            <div class="cropper_wrapper">
                <div bind:this={elwrapperNoImg} class="wrapper_no_img">
                    <span>
                        Please, select an image by <span id="add_img_text" on:click={selectFile}>clicking here</span>
                    </span>
                </div>
                <div bind:this={elWrapperCropper} class="hidden cropper_cont">
                    <img id="cropper_img" class="hidden" bind:this={elCropper}>
                </div>
            </div>
            <div class="control_wrapper">
                <div class="img_preview_cont">
                    <div bind:this={elPreviewCont} class="img_preview"></div>
                </div>
                <div class="action_buttons_container">
                    <Button 
                        id="brightness_plus_btn"
                        css_classes="icon_button"
                        label={''} 
                        icon="/img/icons/brightness_plus.svg"
                    />
                    <Button 
                        id="brightness_less_btn"
                        css_classes="icon_button"
                        label={''} 
                        icon="/img/icons/brightness_less.svg"
                    />
                    <Button 
                        id="contrast_plus_btn"
                        css_classes="icon_button"
                        label={''} 
                        icon="/img/icons/contrast_plus.svg"
                    />
                    <Button 
                        id="contrast_less_btn"
                        css_classes="icon_button"
                        label={''} 
                        icon="/img/icons/contrast_less.svg"
                    />
                    <Button 
                        id="invert_btn"
                        css_classes="icon_button"
                        label={''} 
                        icon="/img/icons/invert.svg"
                    />
                    <Button 
                        id="grayscale_btn"
                        css_classes="icon_button"
                        label={''} 
                        icon="/img/icons/grayscale.svg"
                    />
                    <Button 
                        id="rotate_plus_btn"
                        css_classes="icon_button"
                        label={''} 
                        icon="/img/icons/rotate_right.svg"
                    />
                    <Button 
                        id="rotate_less_btn"
                        css_classes="icon_button"
                        label={''} 
                        icon="/img/icons/rotate_left.svg"
                    />
                    <Button 
                        id="flip_y_btn"
                        css_classes="icon_button"
                        label={''} 
                        icon="/img/icons/flip_y.svg"
                    />
                    <Button 
                        id="flip_x_btn"
                        css_classes="icon_button"
                        label={''} 
                        icon="/img/icons/flip_x.svg"
                    />
                    <Button 
                        id="zoom_in_btn"
                        css_classes="icon_button"
                        label={''} 
                        icon="/img/icons/zoom_in.svg"
                    />
                    <Button 
                        id="zoom_out_btn"
                        css_classes="icon_button"
                        label={''} 
                        icon="/img/icons/zoom_out.svg"
                    />
                </div>
                <div class="main_buttons_wrapper">
                    <Button 
                        id="upload_file_btn"
                        label={'Upload image'} 
                        url={''} 
                        icon="/img/icons/upload.svg"
                    />
                    <Button 
                        id="reset_changes_btn"
                        label={'Reset changes'} 
                        url={''} 
                        icon="/img/icons/reset2.svg"
                    />
                    <Button 
                        id="get_img_btn"
                        label={'Download image'} 
                        url={''} 
                        icon="/img/icons/download2.svg"
                    />
                </div>
            </div>
        </div>
    </main>
    
<style lang="scss">
    main{
        .working_container{
            height: calc(100vh - 80px);
            width: calc(100% - 80px);
            margin: 40px;
            border: 1px solid var(--font_color);
            display: flex;
            border-radius: 4px;
            box-shadow: var(--card_boxshadow);
            background-color: var(--mobile_menu_bg);
            .cropper_wrapper{
                display: flex;
                align-items: center;
                justify-content: center;
                flex-grow: 1;
                .wrapper_no_img{
                    #add_img_text{
                        color: #8427f9;
                        cursor: pointer;
                    }
                }
                .cropper_cont{
                    background-color: var(--bg_color);
                    #cropper_img{
                        display: block;
                        max-width: 100%;
                    }
                }
            }
            .control_wrapper{
                width: 240px;
                border-left: 1px solid var(--font_color);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                padding: 10px;
                .img_preview_cont{
                    width: 220px;
                    height: 124px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: var(--bg_color);
                }
                .img_preview{
                    max-width: 220px;
                    max-height: 124px;
                    width: 220px;
                    height: 124px /*16/9 ratio*/;
                    overflow: hidden;
                }
                .action_buttons_container{
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    grid-template-rows: repeat(auto-fill, auto);
                    grid-row-gap: 40px;
                    grid-column-gap: 40px;
                }
                .main_buttons_wrapper{
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    width: 100%;
                    :global(.button){
                        width: 100%;
                        :global(.svg){
                        }
                        :global(span){
                        }
                    }
                }
            }
        }
    }
</style>