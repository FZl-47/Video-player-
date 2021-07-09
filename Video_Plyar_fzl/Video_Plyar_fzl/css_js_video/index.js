//


let headElement = document.getElementsByTagName("head")[0];
let linK_font_asewome_min_css = document.createElement("link");
linK_font_asewome_min_css.rel = "stylesheet"; linK_font_asewome_min_css.href = "fonts_video_player_fzl/font-awesome/font-awesome-4.7.0/css/font-awesome.min.css";
headElement.appendChild(linK_font_asewome_min_css);
let linK_bootstrap_css = document.createElement("link");
linK_bootstrap_css.rel = "stylesheet"; linK_bootstrap_css.href = "bootstrap/bootstrap-4.5.0/dist/css/bootstrap.css";
headElement.appendChild(linK_bootstrap_css);
let link_bootstrap_min_css = document.createElement("link");
link_bootstrap_min_css.rel = "stylesheet"; link_bootstrap_min_css.href = "bootstrap/bootstrap-4.5.0/dist/css/bootstrap.min.css";
headElement.appendChild(link_bootstrap_min_css);
let script_slim_min_bootstrap = document.createElement("script");
script_slim_min_bootstrap.src = "bootstrap/bootstrap-4.5.0/site/docs/4.5/assets/js/vendor/jquery.slim.min.js";
headElement.appendChild(script_slim_min_bootstrap);
let script_poper_bootstrap = document.createElement("script");
script_poper_bootstrap.src = "bootstrap/popper.min.js";
headElement.appendChild(script_poper_bootstrap);
let script_min_bootstrap = document.createElement("script");
script_min_bootstrap.src = "bootstrap/bootstrap-4.5.0/dist/js/bootstrap.min.js";
headElement.appendChild(script_min_bootstrap);

let Device_Find
let DEVICE = null
let getDeviceType = () => {


    FFDevice_Find = navigator.userAgent;
    DEVICE = "Desktop"
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(Device_Find)) {
        DEVICE = "Tablet"
    }
    if (
        /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
            Device_Find
        )
    ) {
        DEVICE = "Mobile"
    }

};
getDeviceType()

let couter_create_video_player = 0;
function create_controls(video, k) {

    if (video.nodeName === "VIDEO") {

        video.onload = function () {
            responsive()
        }


        if (video.controls) {
            video.removeAttribute("controls")
        }
        video.setAttribute("Width_Style", video.style.width)
        video.setAttribute("Height_Style", video.style.height)
        video.setAttribute("Width_Att", video.getAttribute("width"))
        video.setAttribute("Height_Att", video.getAttribute("height"))

        let _Theme_ = null
        let Copy_video = video;
        let div_container_Video = document.createElement("div");
        let video_clasess = video.className
        let video_style = document.getElementsByClassName("video_player_fzl")[couter_create_video_player].getAttribute("style")
        video.replaceWith(div_container_Video);
        div_container_Video.appendChild(Copy_video);

        video.removeAttribute("style")
        video.removeAttribute("class")
        video.setAttribute("class", "video_player_fzl")
        video_clasess = video_clasess.replace("video_player_fzl", "")
        div_container_Video.className = "container_video " + video_clasess
        let video_height = document.getElementsByClassName("container_video")[couter_create_video_player].clientHeight
        let video_width = document.getElementsByClassName("container_video")[couter_create_video_player].clientWidth
        

        if (video_style == null || video_style == "null") { } else {
            div_container_Video.style = video_style
        }
        if (video.getAttribute("width") == null || video.getAttribute("width") == "null") { } else {
            div_container_Video.style.width = video.getAttribute("width")
            video.removeAttribute("width")
        }
        if (video.getAttribute("height") == null || video.getAttribute("height") == "null") { } else {
            div_container_Video.style.height = video.getAttribute("height")
            video.removeAttribute("height")
        }
        if (video_height == window.getComputedStyle(div_container_Video).height.split("px")[0] || (video_height < window.getComputedStyle(div_container_Video).height.split("px")[0] && video_height + 5 > window.getComputedStyle(div_container_Video).height.split("px")[0])) {
            video.style.height = "auto"
            video.setAttribute("Video_Heigh_For_FullScreen","auto")
        } else {
            video.style.height = "100%"
            video.setAttribute("Video_Heigh_For_FullScreen","100%")
        }
        if (video_height == window.getComputedStyle(div_container_Video).height.split("px")[0]) {
            video.style.height = "100%"
            video.setAttribute("Video_Heigh_For_FullScreen","100%")
        }

        if (video_width == window.getComputedStyle(div_container_Video).width.split("px")[0] || (video_width < window.getComputedStyle(div_container_Video).width.split("px")[0] && video_width > window.getComputedStyle(div_container_Video).width.split("px")[0])) {
            video.style.width = "auto"

        } else {
            video.style.width = "100%"
        }
        if (video_width == window.getComputedStyle(div_container_Video).width.split("px")[0]) {
            video.style.width = "100%"
        }

        let Speed_Rotate_Btn_Center = localStorage.getItem("value_inp_beat_Btn") || 20
        let Speed_Open_Setting = localStorage.getItem("value_inp_open_setting") || 3
        let Speed_Close_Setting = localStorage.getItem("value_inp_close_setting") || 4
        let Speed_Fade_Control = localStorage.getItem("value_inp_fade_control") || 300
        let Speed_Rotate_Btn_Center_Click = localStorage.getItem("value_inp_Rotate_Btn") || 4.5
        let Text_Btn_level1_Theme = localStorage.getItem("Btn_level1_Theme") || "Theme"
        let Text_Btn_level1_Speed = localStorage.getItem("Btn_level1_Speed") || "Speed"
        let Text_Btn_level1_Sub = localStorage.getItem("Btn_level1_Sub") || "Sub"
        let Text_Btn_level1_Quality = localStorage.getItem("Btn_level1_Quality") || "Quality"
        let Img_Btn_Center_Src = localStorage.getItem("State_Btn_play") || 0
        let State_Effect_Btn_level1 = localStorage.getItem("Set_State_Effect_Btn_level1") || "Effect"
        let Font_Vid = localStorage.getItem("Font_Vid_Ply_FZl") || "font-En-12"
        div_container_Video.setAttribute("value_Font", Font_Vid)
        let Text_Shadow_TR_E = "none"
        let COLOR_ST_TR_E = "white"
        let BACKGROUND_ST_TR_E = "linear-gradient(to left,rgba(0,0,0,0.4),rgba(0,0,0,0.45),rgba(0,0,0,0.5),rgba(0,0,0,0.5),rgba(0,0,0,0.5),rgba(0,0,0,0.45),rgba(0,0,0,0.40))"
        let BORDER_WIDTH_BTN_LEVEL1_SETTING = "0.39vw"
        let BORDER_COLOR_BTN_LEVEL1_SETTING = "linear-gradient(100deg,rgba(230,230,230,1),rgba(70,70,70,.9))0%  100%"
        let list_color_for_background_img_btn = ["linear-gradient(to right,rgba(210,210,210,0.5),rgba(255,255,255,.9),rgba(210,210,210,0.5))"];
        let COLOR_SELECT_BTNS_COG = null
        let Timer_For_Random_Theme_According_to_Date = null
        let Counter_Theme_Change_ = "NoChange"
        function Timer_For_Theme_Change() {

            Timer_For_Random_Theme_According_to_Date = setInterval(Timer_Hr, 36000000)

            function Timer_Hr() {
                let Time_Hr = new Date().getHours()

                if (Counter_Theme_Change_ == "NoChange") {
                    if (Time_Hr == 18 || Time_Hr == 19 || Time_Hr == 20 || Time_Hr == 21 || Time_Hr == 22 || Time_Hr == 23 || Time_Hr == 0 || Time_Hr == 1 | Time_Hr == 2 || Time_Hr == 3
                        || Time_Hr == 4 || Time_Hr == 5 || Time_Hr == 6) {
                        _Theme_ = "dark"
                    }
                    if (Time_Hr == 7 || Time_Hr == 8 || Time_Hr == 9 || Time_Hr == 10 || Time_Hr == 11 || Time_Hr == 12 || Time_Hr == 13) {
                        _Theme_ = "white"
                    } if (Time_Hr == 14 || Time_Hr == 15 || Time_Hr == 16 || Time_Hr == 17) {
                        _Theme_ = "blue"
                    }

                } else {
                    clearInterval(Timer_For_Random_Theme_According_to_Date)
                }
            } Timer_Hr()

        } Timer_For_Theme_Change()


        if (_Theme_ == "dark") {
            COLOR_SELECT_BTNS_COG = {
                background: "#1b1e21",
                color: "mediumspringgreen",
                border: ""
            }
        } else if (_Theme_ == "white") {
            COLOR_SELECT_BTNS_COG = {
                background: "rgba(190,190,190,1)",
                color: "black",
                border: ""
            }
        } else if (_Theme_ == "blue") {
            COLOR_SELECT_BTNS_COG = {
                background: "rgba(200,200,200,1)",
                color: "blue",
                border: ""
            }
        }

        let Time_Vid_for_After_Ad
        let div_container_Video_controls = document.createElement("div");
        div_container_Video_controls.className = ` Cnt_Vid_controls  Theme_CNt_${_Theme_} `;
        div_container_Video_controls.style.display = 'none'
        div_container_Video.appendChild(div_container_Video_controls);

        let p_for_darsad_baghi = document.createElement("p")
        p_for_darsad_baghi.className = "p_for_darsad_baghi"
        p_for_darsad_baghi.style.display = "none"
        div_container_Video.appendChild(p_for_darsad_baghi)

        let p_sec_ShowCurrent_time = document.createElement("p")
        p_sec_ShowCurrent_time.className = "Ps_ShowCurrent p_sec_ShowCurrent"
        p_sec_ShowCurrent_time.innerHTML = "0"
        p_sec_ShowCurrent_time.style.width = "33%"
        let p_min_ShowCurrent_time = document.createElement("p")
        p_min_ShowCurrent_time.className = "Ps_ShowCurrent p_min_ShowCurrent"
        p_min_ShowCurrent_time.innerHTML = "0"
        p_min_ShowCurrent_time.style.width = "33%"
        let p_hr_ShowCurrent_time = document.createElement("p")
        p_hr_ShowCurrent_time.innerHTML = "0"
        p_hr_ShowCurrent_time.className = "Ps_ShowCurrent p_hr_ShowCurrent"
        p_hr_ShowCurrent_time.style.width = "33%"


        let div_current_time = document.createElement("div");
        div_current_time.className = "div_current_time";
        let p_currentTime_hr = document.createElement("p");
        p_currentTime_hr.className = "time_current";
        p_currentTime_hr.innerHTML = "00";                                              
        div_current_time.appendChild(p_currentTime_hr);


        let p_currentTime_min = document.createElement("p");
        p_currentTime_min.className = "time_current";
        p_currentTime_min.innerHTML = ":00:";                                           
        div_current_time.appendChild(p_currentTime_min);



        let p_currentTime_sec = document.createElement("p");
        p_currentTime_sec.className = "time_current";
        p_currentTime_sec.innerHTML = "00";                       
        div_current_time.appendChild(p_currentTime_sec);


        let background_input = document.createElement("div")
        background_input.className = "background_input"

        let background_for_preload = document.createElement("div")
        background_for_preload.className = "background_for_preload"
        let input_type_range_Customize = document.createElement("div")
        input_type_range_Customize.className = "div_slider"
        let input_seek_and_progres_video = document.createElement("input");
        input_seek_and_progres_video.type = "range";
        input_seek_and_progres_video.className = "period_progres";
        input_seek_and_progres_video.min = 0;
        input_seek_and_progres_video.max = 100;                                        
        input_seek_and_progres_video.value = 0;
        input_seek_and_progres_video.step = 0.00000000000001;
        input_type_range_Customize.appendChild(background_for_preload)
        input_type_range_Customize.appendChild(input_seek_and_progres_video)
        input_type_range_Customize.appendChild(background_input)

        let div_duration_time = document.createElement("div");
        div_duration_time.className = "div_duration_time";
        let p_duration_hr = document.createElement("p");
        p_duration_hr.className = "time_duration";
        p_duration_hr.innerHTML = "00";
        div_duration_time.appendChild(p_duration_hr);
        let p_duration_min = document.createElement("p");
        p_duration_min.className = "time_duration";
        p_duration_min.innerHTML = ":00:";
        div_duration_time.appendChild(p_duration_min);
        let p_duration_sec = document.createElement("p");
        p_duration_sec.className = "time_duration";
        p_duration_sec.innerHTML = "00";
        div_duration_time.appendChild(p_duration_sec);


        Show_Time_Curent_Input_Seek_Img_Or_P = document.createElement("p")
        Show_Time_Curent_Input_Seek_Img_Or_P.className = "Show_Time_Curent_Input_Seek"

        let div_progress_and_currentTime_and_durartionTime = document.createElement("div");
        div_progress_and_currentTime_and_durartionTime.className = "div_progress_and_Time";
        Show_Time_Curent_Input_Seek_Img_Or_P.appendChild(p_hr_ShowCurrent_time)
        Show_Time_Curent_Input_Seek_Img_Or_P.appendChild(p_min_ShowCurrent_time)
        Show_Time_Curent_Input_Seek_Img_Or_P.appendChild(p_sec_ShowCurrent_time)

        input_type_range_Customize.appendChild(Show_Time_Curent_Input_Seek_Img_Or_P)
        div_progress_and_currentTime_and_durartionTime.appendChild(div_current_time);
        div_progress_and_currentTime_and_durartionTime.appendChild(input_type_range_Customize);
        div_progress_and_currentTime_and_durartionTime.appendChild(div_duration_time);
        div_container_Video_controls.appendChild(div_progress_and_currentTime_and_durartionTime);

        let div_for_btns_controls_ = document.createElement("div")
        div_for_btns_controls_.className = "div_for_btns_controls"

        let btn_ply_or_pause = document.createElement("button");
        btn_ply_or_pause.setAttribute("type", "button");

        btn_ply_or_pause.className = `btn_ply btns_control btns_control_${_Theme_} `
        let i_for_btn_ply = document.createElement("i");
        i_for_btn_ply.className = "fa fa-play";
        btn_ply_or_pause.appendChild(i_for_btn_ply);
        div_for_btns_controls_.appendChild(btn_ply_or_pause);

        let Counter_Img_For_LoadData_and_Set_Btn_onClick = "NoClick"
        let img_btn_center_video = document.createElement("img");
        img_btn_center_video.style.display = "none"
        img_btn_center_video.className = "btn_center_img";
        if (Img_Btn_Center_Src == 2) {
            list_color_for_background_img_btn[0] = "rgba(200,200,200.5)"
            img_btn_center_video.style.borderRadius = "40% 45% 45% 40%"
            img_btn_center_video.style.boxShadow = "0px 0px 20px #fff"
        } else if (Img_Btn_Center_Src == 3) {
            img_btn_center_video.style.borderRadius = "50%"
        }
        else {
            list_color_for_background_img_btn[0] = "linear-gradient(to right,rgba(210,210,210,0.7),rgba(230,230,230,.9),rgba(210,210,210,0.7)"
            img_btn_center_video.style.border = "1px solid rgba(100, 100, 100, 0.5)"
            img_btn_center_video.style.borderRadius = "20% 50% 50% 20%"
        }

        img_btn_center_video.src = `img_video_player_fzl/Img_btn/img_btn_${Img_Btn_Center_Src}.jpg`;
        div_container_Video.appendChild(img_btn_center_video);

        let div_btn_mute_input_volume = document.createElement("div")
        div_btn_mute_input_volume.className = "Div_Btn_Mute_Input_Volume"
        let btn_mute_or_unmute = document.createElement("button");
        btn_mute_or_unmute.className = `btn_mute_unmute btns_control btns_control_${_Theme_} `;
        let i_for_btn_mute_or_unmute = document.createElement("i");
        i_for_btn_mute_or_unmute.className = "fa fa-volume-down";
        btn_mute_or_unmute.appendChild(i_for_btn_mute_or_unmute);
        div_btn_mute_input_volume.appendChild(btn_mute_or_unmute);

        let input_volume = document.createElement("input");
        input_volume.type = "range";
        input_volume.className = "input_volume";
        input_volume.min = 0;
        input_volume.max = 1;
        input_volume.step = 0.01;
        input_volume.value = 0.5;

        div_btn_mute_input_volume.appendChild(input_volume);
        div_for_btns_controls_.appendChild(div_btn_mute_input_volume)


        let btn_cog = document.createElement("button");
        btn_cog.className = `btn_cog btns_control btns_control_${_Theme_} `;
        btn_cog.title = "(s)Setting"
        div_for_btns_controls_.appendChild(btn_cog);
        let i_for_btn_cog = document.createElement("i");
        i_for_btn_cog.className = "fa fa-cog";
        btn_cog.appendChild(i_for_btn_cog);

        let btn_FullScreen = document.createElement("button");
        btn_FullScreen.className = `btn_fullscreen btns_control btns_control_${_Theme_} `;
        let i_for_btn_FullScreen = document.createElement("i");
        i_for_btn_FullScreen.className = "fa fa-expand";
        btn_FullScreen.appendChild(i_for_btn_FullScreen);
        div_for_btns_controls_.appendChild(btn_FullScreen);


        div_container_Video_controls.appendChild(div_for_btns_controls_)


        let div_for_btn_cog_VIdeo_player_fzl_for_show_setting = document.createElement("div");
        div_for_btn_cog_VIdeo_player_fzl_for_show_setting.className = "div_for_btn_cog_VIdeo_player_fzl";
        div_for_btn_cog_VIdeo_player_fzl_for_show_setting.style.display = "none"


        let div_full_btn_sub_theme_quality = document.createElement("div");
        div_full_btn_sub_theme_quality.className = " div_full_btn_for_setting_level_2_VIdeo_player_fzl ";


        let btn_theme_for_setting = document.createElement("button");
        btn_theme_for_setting.className = "btn_level_1_theme classes_for_btns_level_1_for_VIdeo_player_fzl ";
        if (State_Effect_Btn_level1 == "Effect") {
            btn_theme_for_setting.className = "btn_level_1_theme classes_for_btns_level_1_for_VIdeo_player_fzl classes_for_btns_level_1_for_VIdeo_player_fzl_effect";
        }
        btn_theme_for_setting.innerHTML = Text_Btn_level1_Theme;
        btn_theme_for_setting.valueHeight = 4;
        div_for_btn_cog_VIdeo_player_fzl_for_show_setting.appendChild(btn_theme_for_setting);


        let btn_subtitle_for_setting = document.createElement("button");
        btn_subtitle_for_setting.className = "btn_level_1_subtitle classes_for_btns_level_1_for_VIdeo_player_fzl ";
        if (State_Effect_Btn_level1 == "Effect") {
            btn_subtitle_for_setting.className = "btn_level_1_subtitle classes_for_btns_level_1_for_VIdeo_player_fzl classes_for_btns_level_1_for_VIdeo_player_fzl_effect";
        }
        btn_subtitle_for_setting.innerHTML = Text_Btn_level1_Sub;
        btn_subtitle_for_setting.valueHeight = 2;



        let video_btns_theme_level2 = div_full_btn_sub_theme_quality.getElementsByClassName("btns_theme_level2")
        let counter_for_e_ghable = 0;
        let e_ghable_for_style_btns_theme = null;


        let div_for_theme_level2 = document.createElement("div")
        div_for_theme_level2.className = "div_theme_level2 classes_for_div_setting_level2"
        let btn_level2_theme_dark = document.createElement("button");
        btn_level2_theme_dark.color = "dark"
        btn_level2_theme_dark.className = "btn_level_2_theme_dark btns_theme_level2";


        counter_for_e_ghable = 1
        div_for_theme_level2.appendChild(btn_level2_theme_dark);

        let btn_level2_theme_blue = document.createElement("button")
        btn_level2_theme_blue.className = "btn_level_2_theme_blue btns_theme_level2"
        btn_level2_theme_blue.color = "blue"
        div_for_theme_level2.appendChild(btn_level2_theme_blue);

        let btn_level2_theme_white = document.createElement("button");
        btn_level2_theme_white.color = "white"
        btn_level2_theme_white.className = "btn_level2_theme_white btns_theme_level2";
        div_for_theme_level2.appendChild(btn_level2_theme_white);
        div_full_btn_sub_theme_quality.appendChild(div_for_theme_level2)
        if (_Theme_ == "dark") {
            e_ghable_for_style_btns_theme = btn_level2_theme_dark
            btn_level2_theme_dark.style = "width:2.3vw;height:2.3vw;"
        } else if (_Theme_ == "blue") {
            e_ghable_for_style_btns_theme = btn_level2_theme_blue
            btn_level2_theme_blue.style = "width:2.3vw;height:2.3vw;"
        } else if (_Theme_ == "white") {
            e_ghable_for_style_btns_theme = btn_level2_theme_white
            btn_level2_theme_white.style = "width:2.3vw;height:2.3vw;"
        }




        let counter_e_speed = 0;
        let e_ghbali_speed_btnlevel2 = null;
        let btn_level1_speed = document.createElement("button");
        btn_level1_speed.innerHTML = Text_Btn_level1_Speed;
        btn_level1_speed.valueHeight = 3;
        btn_level1_speed.className = 'btn_level1_speed classes_for_btns_level_1_for_VIdeo_player_fzl ';
        if (State_Effect_Btn_level1 == "Effect") {
            btn_level1_speed.className = 'btn_level1_speed classes_for_btns_level_1_for_VIdeo_player_fzl classes_for_btns_level_1_for_VIdeo_player_fzl_effect';
        }
        div_for_btn_cog_VIdeo_player_fzl_for_show_setting.appendChild(btn_level1_speed);

        let div_for_speed = document.createElement("div")
        div_for_speed.className = "div_speed classes_for_div_setting_level2"
        let btn_speed_2 = document.createElement("button")
        btn_speed_2.className = `clases_for_btn_speed Theme_Qu_level_2_${_Theme_} `
        btn_speed_2.innerHTML = "2x"
        btn_speed_2.value = 2
        btn_speed_2.title = "2"
        let btn_speed_1_5 = document.createElement("button")
        btn_speed_1_5.innerHTML = "1.5x"
        btn_speed_1_5.value = 1.5
        btn_speed_1_5.title = "1.5"
        btn_speed_1_5.className = `clases_for_btn_speed Theme_Qu_level_2_${_Theme_}`
        let btn_speed_normal = document.createElement("button")
        btn_speed_normal.value = 1
        btn_speed_normal.title = "1"
        btn_speed_normal.innerHTML = "1x"
        btn_speed_normal.style.background = COLOR_SELECT_BTNS_COG.background
        btn_speed_normal.style.color = COLOR_SELECT_BTNS_COG.color
        btn_speed_normal.style.border = COLOR_SELECT_BTNS_COG.border
        e_ghbali_speed_btnlevel2 = btn_speed_normal
        counter_e_speed += 1
        btn_speed_normal.className = `clases_for_btn_speed Theme_Qu_level_2_${_Theme_}`
        let btn_speed_0_5 = document.createElement("button")
        btn_speed_0_5.innerHTML = "0.5x"
        btn_speed_0_5.value = 0.5
        btn_speed_0_5.title = "0.5"
        btn_speed_0_5.className = `clases_for_btn_speed Theme_Qu_level_2_${_Theme_}`
        let btn_speed_0_25 = document.createElement("button")
        btn_speed_0_25.innerHTML = "0.25x"
        btn_speed_0_25.value = 0.25
        btn_speed_0_25.title = "0.25"
        btn_speed_0_25.className = `clases_for_btn_speed Theme_Qu_level_2_${_Theme_}`

        div_for_speed.appendChild(btn_speed_2)
        div_for_speed.appendChild(btn_speed_1_5)
        div_for_speed.appendChild(btn_speed_normal)
        div_for_speed.appendChild(btn_speed_0_5)
        div_for_speed.appendChild(btn_speed_0_25)

        div_for_btn_cog_VIdeo_player_fzl_for_show_setting.appendChild(btn_subtitle_for_setting);

        div_full_btn_sub_theme_quality.appendChild(div_for_speed)



        function set_fon_size_for_timeduration_and_timecurrent_and_set_widt_height_btn_img_center() {
            for (let qq = 0; qq < document.getElementsByClassName("container_video").length; qq++) {


                let width_div_container_video = document.getElementsByClassName("container_video")[qq].clientWidth;
                let img_btn_width_height = document.getElementsByClassName("container_video")[qq].getElementsByClassName("btn_center_img")[0]
                img_btn_width_height.style.display = "none"


                if (width_div_container_video > 0 && width_div_container_video < 100) {
                    img_btn_width_height.style.width = 15 + "px";
                    img_btn_width_height.style.height = 15 + "px";
                } else if (width_div_container_video > 100 && width_div_container_video < 200) {
                    img_btn_width_height.style.display = "inline-block";
                    img_btn_width_height.style.width = 20 + "px";
                    img_btn_width_height.style.height = 20 + "px";
                } else if (width_div_container_video > 200 && width_div_container_video < 300) {
                    img_btn_width_height.style.display = "inline-block";
                    img_btn_width_height.style.width = 35 + "px";
                    img_btn_width_height.style.height = 35 + "px";
                } else if (width_div_container_video > 300 && width_div_container_video < 400) {
                    img_btn_width_height.style.display = "inline-block";
                    img_btn_width_height.style.width = 45 + "px";
                    img_btn_width_height.style.height = 45 + "px";

                } else if (width_div_container_video > 400 && width_div_container_video < 500) {
                    img_btn_width_height.style.display = "inline-block";
                    img_btn_width_height.style.width = 55 + "px";
                    img_btn_width_height.style.height = 55 + "px";

                } else if (width_div_container_video > 500 && width_div_container_video < 700) {
                    img_btn_width_height.style.display = "inline-block";
                    img_btn_width_height.style.width = 70 + "px";
                    img_btn_width_height.style.height = 70 + "px";

                } else if (width_div_container_video > 700 && width_div_container_video < 1000) {
                    img_btn_width_height.style.display = "inline-block";
                    img_btn_width_height.style.width = 80 + "px";
                    img_btn_width_height.style.height = 80 + "px";

                } else if (width_div_container_video > 1000 && width_div_container_video < 1200) {
                    img_btn_width_height.style.display = "inline-block";
                    img_btn_width_height.style.width = 95 + "px";
                    img_btn_width_height.style.height = 95 + "px";

                } else if (width_div_container_video > 1200 && width_div_container_video < 1500) {
                    img_btn_width_height.style.display = "inline-block";
                    img_btn_width_height.style.width = 105 + "px";
                    img_btn_width_height.style.height = 105 + "px";

                } else if (width_div_container_video > 1500 && width_div_container_video < 1800) {
                    img_btn_width_height.style.display = "inline-block";
                    img_btn_width_height.style.width = 115 + "px";
                    img_btn_width_height.style.height = 115 + "px";

                } else if (width_div_container_video > 1800) {
                    img_btn_width_height.style.display = "inline-block";
                    img_btn_width_height.style.width = 120 + "px";
                    img_btn_width_height.style.height = 120 + "px";
                }
                img_btn_width_height.style.left = (document.getElementsByClassName("container_video")[qq].clientWidth - img_btn_width_height.style.width.split("px")[0]) / 2
                img_btn_width_height.style.top = (document.getElementsByClassName("container_video")[qq].clientHeight - img_btn_width_height.style.height.split("px")[0]) / 2
            }

        }
        let SET_WIDTH_DIV_FOR_SHOW_SETTING = 0
        let Timer_Set_Theme_Plus = null
        let Timer_Set_Theme_Miunes = null
        let E_theme = null
        let Counter_For_Opacity_DIV_Container_Set_Theme = null
        let Counter_For_Opacity_Plus_DIV_Container_Set_Theme = 0
        let Counter_For_Opacity_Miunes_DIV_Container_Set_Theme = 1

        img_btn_center_video.style.background = list_color_for_background_img_btn
        for (let oo = 0; oo < video_btns_theme_level2.length; oo++) {
            video_btns_theme_level2[oo].onclick = function (e) {
                E_theme = e
                clearInterval(Timer_Set_Theme_Miunes)
                Timer_Set_Theme_Miunes = setInterval(Set_Theme_Miunes_F, 8)
            }
        }
        function Set_Theme_Miunes_F() {
            Counter_For_Opacity_Miunes_DIV_Container_Set_Theme -= 0.050
            div_container_Video.style.opacity = Counter_For_Opacity_Miunes_DIV_Container_Set_Theme

            if (Counter_For_Opacity_Miunes_DIV_Container_Set_Theme < 0) {
                Counter_For_Opacity_Miunes_DIV_Container_Set_Theme = 1
                set_theme(E_theme)
                clearInterval(Timer_Set_Theme_Plus)
                Timer_Set_Theme_Plus = setInterval(Set_Theme_Plus_F, 8)
                clearInterval(Timer_Set_Theme_Miunes)
            }
        }
        function Set_Theme_Plus_F() {
            Counter_For_Opacity_Plus_DIV_Container_Set_Theme += 0.050
            div_container_Video.style.opacity = Counter_For_Opacity_Plus_DIV_Container_Set_Theme
            if (Counter_For_Opacity_Plus_DIV_Container_Set_Theme > 1) {
                Counter_For_Opacity_Plus_DIV_Container_Set_Theme = 0
                clearInterval(Timer_Set_Theme_Plus)
            }
        }

        let counter_for_oninput_for_play_or_not_play = "not_ply" //bottom
        let counter_for_set_style_btn_qualitylevel2 = 0;
        let btn_quality_for_setting = null;
        let counter_create_source = 0;
        let source_res = null;
        let counter_for_loop_for_source_btn_quality_creat_empty = 0;
        let counter_for_run_or_not_run_btn_quality = "not_run";
        let counter_for_quality_change_play_or_not = "pause";
        let div_for_quality = document.createElement("div");
        div_for_quality.className = "btn_level2_quality_div classes_for_div_setting_level2";
        let btn_level_2_quality = null;
        let instance_btn_level_2_quality_0 = null;
        let e_0_ghabli = null;
        let counter_onclick_btn_quality = 0;



        for (let n = 0; n < video.getElementsByTagName("source").length; n++) {
            video.getElementsByTagName("source")[n].className = "source_video"
        }


        let source_def = video.querySelectorAll(`.source_video[default]`)
        if (source_def.length > 1) {
            throw new RangeError("The number of defaults is more than allowed")
        } else {
            source_def = source_def[0]
        }


        btn_quality_for_setting = document.createElement('button')
        btn_quality_for_setting.className = "btn_level_1_quality classes_for_btns_level_1_for_VIdeo_player_fzl "
        if (State_Effect_Btn_level1 == "Effect") {
            btn_quality_for_setting.className = "btn_level_1_quality classes_for_btns_level_1_for_VIdeo_player_fzl classes_for_btns_level_1_for_VIdeo_player_fzl_effect"
        }
        btn_quality_for_setting.innerHTML = Text_Btn_level1_Quality
        btn_quality_for_setting.valueHeight = 1;
        div_for_btn_cog_VIdeo_player_fzl_for_show_setting.appendChild(btn_quality_for_setting)
        btn_quality_for_setting.onclick = function (e) {
            set_Right_bottom_div_full_btn_for_setting_level2(e)
            open_or_close_quality(e);
        };


        div_for_btn_cog_VIdeo_player_fzl_for_show_setting.appendChild(btn_quality_for_setting)
        if (video.getElementsByClassName("source_video").length == 0) {
            throw new RangeError("Number of source tags less than allowed")
        }

        for (let p = 0; p < video.getElementsByClassName("source_video").length; p++) {



            if (video.getElementsByClassName("source_video").length > 1) {
                if (video.getElementsByClassName("source_video")[p].attributes.size == " " ||
                    video.getElementsByClassName("source_video")[p].attributes.size == null || video.getElementsByClassName("source_video")[p].attributes.size == false ||
                    video.getElementsByClassName("source_video")[p].attributes.size === undefined || video.getElementsByClassName("source_video")[p].attributes.size.value == "" ||
                    video.getElementsByClassName("source_video")[p].attributes.size.value == null) {
                    throw new Error(`video ${couter_create_video_player + 1} source ${p + 1} The size value is not available in the source tag`)
                } else { }
            }


            try {
                video.getElementsByClassName("source_video").length > 1 && video.getElementsByClassName("source_video")[p].attributes.size.value != null &&
                    video.getElementsByClassName("source_video")[p].attributes.size.value != undefined && video.getElementsByClassName("source_video")[p].attributes.size.value != ""
            } catch (e) {

                throw new Error(`video ${couter_create_video_player + 1} source ${p + 1} The size value is not available in the source tag`)
            }



            if (video.getElementsByClassName("source_video").length > 1 && video.getElementsByClassName("source_video")[p].attributes.size.value != null &&
                video.getElementsByClassName("source_video")[p].attributes.size.value != undefined && video.getElementsByClassName("source_video")[p].attributes.size.value != "") {

                btn_level_2_quality = document.createElement("button")
                btn_level_2_quality.innerHTML = video.getElementsByClassName("source_video")[p].attributes.size.value;
                btn_level_2_quality.value = p
                btn_level_2_quality.className = `btn_quality_level_2 Theme_Qu_level_2_${_Theme_}`;
                btn_level_2_quality.style.cursor = "pointer"
                btn_level_2_quality.onmouseover = function () {
                    let Height_btn_Quality_level2_ = window.getComputedStyle(btn_level_2_quality).height.split("px")[0]
                    btn_level_2_quality.style.height = Height_btn_Quality_level2_



                }

                btn_level_2_quality.onclick = function (e) {
                    if (counter_for_fixed_down_for_scroll_or_click_for_div_Show_Setting == "Click") {
                        btn_level_2_quality_onclick_set_video_quality(e)
                    }
                };

                div_for_quality.appendChild(btn_level_2_quality)
                if (counter_for_set_style_btn_qualitylevel2 == 0) {

                    instance_btn_level_2_quality_0 = btn_level_2_quality
                }
                counter_for_set_style_btn_qualitylevel2++



                if (source_def && source_def != null) {
                    if (video.getElementsByClassName("source_video")[p].attributes.default) {
                        btn_level_2_quality.style.background = COLOR_SELECT_BTNS_COG.background
                        btn_level_2_quality.style.color = COLOR_SELECT_BTNS_COG.color
                        btn_level_2_quality.style.border = COLOR_SELECT_BTNS_COG.border

                        try {
                            e_0_ghabli = btn_level_2_quality
                        } catch (e) { }
                        counter_onclick_btn_quality = 1
                    }
                } else {



                    try {
                        instance_btn_level_2_quality_0.style.background = COLOR_SELECT_BTNS_COG.background
                        instance_btn_level_2_quality_0.style.color = COLOR_SELECT_BTNS_COG.color
                        instance_btn_level_2_quality_0.style.border = COLOR_SELECT_BTNS_COG.border

                        instance_btn_level_2_quality_0
                        e_0_ghabli = instance_btn_level_2_quality_0
                    } catch (e) { }
                    counter_onclick_btn_quality = 1
                }
            }
            else {
                if (counter_for_loop_for_source_btn_quality_creat_empty == 0) {
                    btn_level_2_quality = document.createElement("button")
                    btn_level_2_quality.className = "btn_quality_level_2 ";
                    btn_level_2_quality.innerHTML = "Empty";
                    btn_level_2_quality.style.cursor = "default"
                    div_for_quality.appendChild(btn_level_2_quality)
                    counter_for_loop_for_source_btn_quality_creat_empty = 1
                }
            }
        }








        let e_ghabli_Sub_Theme = null
        let Counter_Change_Theme_Sub = null
        let btn_for_track_sub = null
        let div_sub = document.createElement("div");
        let counter_for_eghabli_Track = 0
        let e_ghable_for_Track_Sub = null
        div_sub.className = "div_subtitles classes_for_div_setting_level2";
        let video_track_lentgh = video.getElementsByTagName("track").length;

        for (let b = 0; b < video_track_lentgh; b++) {
            video.getElementsByTagName("track")[b].setAttribute("Counter_Track", b)
            btn_for_track_sub = document.createElement("button");
            btn_for_track_sub.className = `btn_track Theme_Qu_level_2_${_Theme_} `;
            btn_for_track_sub.style.cursor = "pointer"
            btn_for_track_sub.setAttribute("Counter_Value_track_VIdeo_Player", b)

            try {

                if (video.getElementsByTagName("track")[b].attributes.label.value === "") {
                    btn_for_track_sub.innerHTML = "Unknown"
                } else {
                    btn_for_track_sub.innerHTML = video.getElementsByTagName("track")[b].attributes.label.value;
                }

            } catch (e) {
                btn_for_track_sub.innerHTML = "Unknown"
            }

            div_sub.appendChild(btn_for_track_sub);

            btn_for_track_sub.onclick = function (e) {
                e_ghabli_Sub_Theme = e
                Counter_Change_Theme_Sub = 1

                if (counter_for_fixed_down_for_scroll_or_click_for_div_Show_Setting == "Click") {
                    try {
                        video.querySelector("track[default]").removeAttribute("default")
                    } catch (e) { }

                    video.getElementsByTagName("track")[e.target.getAttribute("Counter_Value_track_VIdeo_Player")].setAttribute("default", "")
                    set_bg_col_Sub(e)
                }
            }
        }

        try {
            if (video.querySelector("track[default]")) {
                let btn_Sub = div_sub.getElementsByClassName("btn_track")[video.querySelector("track[default]").getAttribute("Counter_Track")]
                btn_Sub.style.background = COLOR_SELECT_BTNS_COG.background
                btn_Sub.style.color = COLOR_SELECT_BTNS_COG.color
                btn_Sub.style.border = COLOR_SELECT_BTNS_COG.border
                e_ghable_for_Track_Sub = btn_Sub
                counter_for_eghabli_Track++
            }
        } catch (e) { }

        if (video.querySelectorAll("track[default]").length > 1) {
            throw new Error(`The number of default values ​​is greater in Video ${couter_create_video_player + 1}`)
        }
        if (video_track_lentgh < 1) {
            let btn_for_track_sub = document.createElement("button");
            btn_for_track_sub.className = `btn_track Theme_Qu_level_2_${_Theme_} `;
            btn_for_track_sub.innerHTML = "Empty";
            btn_for_track_sub.style.cursor = "default"
            div_sub.appendChild(btn_for_track_sub);
        }
        source_res = document.createElement("source");
        source_res.className = "Src_Vid_Ok"
        if (source_def) {
            video.insertBefore(source_res, video.getElementsByTagName("source")[0]);
            source_res.src = video.querySelector(`.source_video[default]`).src
            if (counter_for_quality_change_play_or_not == "play") {
                video.pause();
                video.load()
                video.play()
            }
            else {
                video.pause();
                video.load()
            }
        }
        let Counter_Change_Theme_Quality = null
        let e_ghabli_Quality_Theme = null
        function btn_level_2_quality_onclick_set_video_quality(e) {
            Counter_Change_Theme_Quality = 1
            e_ghabli_Quality_Theme = e
            let source_radio = video.getElementsByClassName("source_video")[e.target.value]
            video.insertBefore(source_res, video.getElementsByTagName("source")[0]);
            source_res.src = source_radio.src;
            source_res.size = e.target.innerHTML;
            let curent_time_for_reload_video = video.currentTime;
            if (counter_for_quality_change_play_or_not === "play") {
                video.pause();
                video.load();
                video.play();
            } else {
                video.pause();
                video.load()
            }
            video.playbackRate = Video_PlayRaete
            video.currentTime = curent_time_for_reload_video;
            set_bg_col_Quality(e)
            set_value_progres_seek()

        };
        function set_bg_col_Quality(e) {
            if (counter_onclick_btn_quality > 0) {
                e_0_ghabli.setAttribute("style", "")
            }
            e.target.style.background = COLOR_SELECT_BTNS_COG.background
            e.target.style.color = COLOR_SELECT_BTNS_COG.color
            e.target.style.border = COLOR_SELECT_BTNS_COG.border
            e_0_ghabli = e.target
            counter_onclick_btn_quality++;
        }
        function set_bg_col_Sub(e) {
            if (counter_for_eghabli_Track > 0) {
                e_ghable_for_Track_Sub.setAttribute("style", "")
            }
            counter_for_eghabli_Track++
            e_ghable_for_Track_Sub = e.target
            e.target.style.background = COLOR_SELECT_BTNS_COG.background
            e.target.style.color = COLOR_SELECT_BTNS_COG.color
            e.target.style.border = COLOR_SELECT_BTNS_COG.border
        }


        /////////////////////////////////////////////////////////////////////////////






        div_full_btn_sub_theme_quality.appendChild(div_sub);
        div_full_btn_sub_theme_quality.appendChild(div_for_quality);
        div_for_btn_cog_VIdeo_player_fzl_for_show_setting.appendChild(div_full_btn_sub_theme_quality)
        div_container_Video_controls.appendChild(div_for_btn_cog_VIdeo_player_fzl_for_show_setting);
        let e_sub_ghabli = null;
        let e_speed_ghabli = null;
        let e_quality_ghabli = null;
        let e_theme_ghabli = null;
        let counter_for_add_opacity_speed = 0
        let counter_open_or_close_speed = "open"
        function speed_for_video_f(e) {
            if (counter_open_or_close_speed == "open") {
                try {
                    e_theme_ghabli.target.style.opacity = "1"
                    e_theme_ghabli.target.style.background = ""
                    e_theme_ghabli.target.style.color = ""
                    e_theme_ghabli.target.style.borderWidth = ""
                    e_theme_ghabli.target.style.borderImage = ""
                    e_theme_ghabli.target.style.textShadow = ""
                    e_theme_ghabli.target.style.letterSpacing = "0"

                } catch (e) { }
                try {
                    e_sub_ghabli.target.style.opacity = "1"
                    e_sub_ghabli.target.style.background = ""
                    e_sub_ghabli.target.style.color = ""
                    e_sub_ghabli.target.style.borderImage = ""
                    e_sub_ghabli.target.style.borderWidth = ""
                    e_sub_ghabli.target.style.textShadow = ""
                    e_sub_ghabli.target.style.letterSpacing = "0"

                } catch (e) { }
                try {
                    e_quality_ghabli.target.style.opacity = "1"
                    e_quality_ghabli.target.style.background = ""
                    e_quality_ghabli.target.style.color = ""
                    e_quality_ghabli.target.style.borderWidth = ""
                    e_quality_ghabli.target.style.borderImage = ""
                    e_quality_ghabli.target.style.textShadow = ""
                    e_quality_ghabli.target.style.letterSpacing = "0"
                } catch (e) { }
                e_speed_ghabli = e;
                e.target.style.background = BACKGROUND_ST_TR_E
                e.target.style.color = COLOR_ST_TR_E
                e.target.style.textShadow = Text_Shadow_TR_E
                e.target.style.opacity = "1"
                e.target.style.borderWidth = BORDER_WIDTH_BTN_LEVEL1_SETTING
                e.target.style.borderImage = BORDER_COLOR_BTN_LEVEL1_SETTING
                if (State_Effect_Btn_level1 == "Effect") {
                    e.target.style.letterSpacing = "0.3vw"
                }

            } else {
                e.target.style.opacity = "1"
                e.target.style.color = ""
                e.target.style.background = ""
                e.target.style.borderImage = ""
                e.target.style.borderWidth = ""
                e.target.style.textShadow = ""
                e.target.style.letterSpacing = "0"
            }
        }

        let right_div_full_btn_for_setting_level2 = null
        let timer_for_open_or_close_div_speed = null;
        let right_div_full_for_Show_btn_level2 = null
        let top_div_full_for_Show_btn_level2 = null
        let instance_e_for_RESP_div_Show_cog = null
        function set_Right_bottom_div_full_btn_for_setting_level2(e) {
            instance_e_for_RESP_div_Show_cog = e

            for (let yyy = 0; yyy < document.getElementsByClassName("div_for_btn_cog_VIdeo_player_fzl").length; yyy++) {
                right_div_full_for_Show_btn_level2 = document.getElementsByClassName("div_for_btn_cog_VIdeo_player_fzl")[yyy].clientWidth + 8
                top_div_full_for_Show_btn_level2 = document.getElementsByClassName("div_for_btn_cog_VIdeo_player_fzl")[yyy].clientHeight / 9 + "%"
                try {
                    if (instance_e_for_RESP_div_Show_cog.target.valueHeight === 4) {
                        top_div_full_for_Show_btn_level2 = div_for_btn_cog_VIdeo_player_fzl_for_show_setting.clientHeight / 8 + "%"
                    }
                } catch (e) { }
                document.getElementsByClassName("div_full_btn_for_setting_level_2_VIdeo_player_fzl")[yyy].style.right = right_div_full_for_Show_btn_level2
                document.getElementsByClassName("div_full_btn_for_setting_level_2_VIdeo_player_fzl")[yyy].style.top = top_div_full_for_Show_btn_level2
            }
        }

        btn_level1_speed.onclick = function (e) {
            set_Right_bottom_div_full_btn_for_setting_level2(e)
            speed_for_video_f(e);
            clearInterval(timer_for_open_or_close_div_speed)
            timer_for_open_or_close_div_speed = setInterval(open_or_close_div_speed, 10)
        };
        function open_or_close_div_speed() {
            if (counter_open_or_close_speed == "open") {

                div_for_speed.style.display = "inline-block"
                counter_open_or_close_theme = "open";
                counter_open_or_close_quality = "open";
                counter_open_or_close_subtitle = "open";
                div_sub.style.display = "none";
                div_for_quality.style.display = "none";
                div_for_theme_level2.style.display = "none";
                div_for_speed.style.opacity = counter_for_add_opacity_speed
                counter_for_add_opacity_speed += 0.070
                if (counter_for_add_opacity_speed > 1) {
                    counter_open_or_close_speed = "close"
                    counter_for_add_opacity_speed = 1
                    Set_Fade_Out_For_Div_Show_Setting(div_full_btn_sub_theme_quality)
                    clearInterval(timer_for_open_or_close_div_speed)
                }
            } else {
                div_for_speed.style.opacity = counter_for_add_opacity_speed
                counter_for_add_opacity_speed -= 0.080
                if (counter_for_add_opacity_speed < 0) {
                    counter_for_add_opacity_speed = 0
                    counter_open_or_close_speed = "open"
                    div_for_speed.style.display = "none"
                    clearInterval(timer_for_open_or_close_div_speed)
                }
            }
        }
        let Counter_Change_Theme_Speed = null
        let e_ghabli_Speed_Theme = null
        let Video_PlayRaete = 1
        for (let v = 0; v < div_for_speed.getElementsByClassName("clases_for_btn_speed").length; v++) {
            div_for_speed.getElementsByClassName("clases_for_btn_speed")[v].onclick = function (e) {
                video.playbackRate = e.target.value
                Video_PlayRaete = e.target.value
                e_ghabli_Speed_Theme = e
                Counter_Change_Theme_Speed = 1
                set_bg_col_Speed(e)
            }
        }
        function set_bg_col_Speed(e) {
            counter_e_speed++
            if (counter_e_speed > 1) {
                e_ghbali_speed_btnlevel2.setAttribute("style", "")
            }
            e.target.style.background = COLOR_SELECT_BTNS_COG.background
            e.target.style.color = COLOR_SELECT_BTNS_COG.color
            e.target.style.border = COLOR_SELECT_BTNS_COG.border
            e_ghbali_speed_btnlevel2 = e.target

        };

        let timer_for_open_subtitle = null;
        let counter_open_or_close_subtitle = "open";
        let counter_opacity_for_open_subtitle = 0;
        function open_or_close_subtitle(e) {
            clearInterval(timer_for_open_subtitle);
            timer_for_open_subtitle = setInterval(open_subtitle_f, 10);
            if (counter_open_or_close_subtitle == "open") {
                try {
                    e_speed_ghabli.target.style.opacity = "1"
                    e_speed_ghabli.target.style.background = ""
                    e_speed_ghabli.target.style.color = ""
                    e_speed_ghabli.target.style.borderImage = ""
                    e_speed_ghabli.target.style.borderWidth = ""
                    e_speed_ghabli.target.style.textShadow = ""
                    e_speed_ghabli.target.style.letterSpacing = "0"
                } catch (e) { }
                try {
                    e_theme_ghabli.target.style.opacity = "1"
                    e_theme_ghabli.target.style.background = ""
                    e_theme_ghabli.target.style.color = ""
                    e_theme_ghabli.target.style.borderWidth = ""
                    e_theme_ghabli.target.style.borderImage = ""
                    e_theme_ghabli.target.style.textShadow = ""
                    e_theme_ghabli.target.style.letterSpacing = "0"
                } catch (e) { }
                try {
                    e_quality_ghabli.target.style.opacity = "1"
                    e_quality_ghabli.target.style.background = ""
                    e_quality_ghabli.target.style.color = ""
                    e_quality_ghabli.target.style.borderImage = ""
                    e_quality_ghabli.target.style.borderWidth = ""
                    e_quality_ghabli.target.style.textShadow = ""
                    e_quality_ghabli.target.style.letterSpacing = "0"
                } catch (e) {
                }
                e_sub_ghabli = e;
                e.target.style.borderWidth = BORDER_WIDTH_BTN_LEVEL1_SETTING
                e.target.style.borderImage = BORDER_COLOR_BTN_LEVEL1_SETTING
                e.target.style.background = BACKGROUND_ST_TR_E
                e.target.style.color = COLOR_ST_TR_E
                e.target.style.textShadow = Text_Shadow_TR_E
                e.target.style.opacity = "1"
                if (State_Effect_Btn_level1 == "Effect") {
                    e.target.style.letterSpacing = "0.3vw"
                }
            } else {
                e.target.style.opacity = "1"
                e.target.style.color = ""
                e.target.style.background = ""
                e.target.style.borderImage = ""
                e.target.style.borderWidth = ""
                e.target.style.textShadow = ""
                e.target.style.letterSpacing = "0"
            }
        }
        function open_subtitle_f() {
            if (counter_open_or_close_subtitle === "open") {
                div_for_speed.style.display = "none"
                counter_open_or_close_speed = "open";
                counter_open_or_close_theme = "open";
                counter_open_or_close_quality = "open";
                div_for_quality.style.display = "none";
                div_sub.style.display = "inline-block";
                div_for_theme_level2.style.display = "none";
                div_sub.style.opacity = counter_opacity_for_open_subtitle;
                counter_opacity_for_open_subtitle += 0.070;
                if (counter_opacity_for_open_subtitle > 1) {
                    counter_opacity_for_open_subtitle = 1;
                    counter_open_or_close_subtitle = "close";
                    Set_Fade_Out_For_Div_Show_Setting(div_full_btn_sub_theme_quality)
                    clearInterval(timer_for_open_subtitle)
                }
            } else {
                counter_opacity_for_open_subtitle -= 0.080;
                div_sub.style.opacity = counter_opacity_for_open_subtitle;
                if (counter_opacity_for_open_subtitle < 0) {
                    counter_opacity_for_open_subtitle = 0;
                    clearInterval(timer_for_open_subtitle);
                    counter_open_or_close_subtitle = "open";
                    div_sub.style.display = "none";
                }
            }
        }

        btn_subtitle_for_setting.onclick = function (e) {
            open_or_close_subtitle(e);
            set_Right_bottom_div_full_btn_for_setting_level2(e)
        };
        let counter_open_or_close_quality = "open";
        let counter_opacity_quality = 0;
        let timer_for_open_or_close_quality = null;
        function open_or_close_quality(e) {
            clearInterval(timer_for_open_or_close_quality);
            timer_for_open_or_close_quality = setInterval(open_or_close_quality_f, 10);
            if (counter_open_or_close_quality === "open") {
                try {
                    e_sub_ghabli.target.style.opacity = "1"
                    e_sub_ghabli.target.style.background = ""
                    e_sub_ghabli.target.style.color = ""
                    e_sub_ghabli.target.style.borderImage = ""
                    e_sub_ghabli.target.style.borderWidth = ""
                    e_sub_ghabli.target.style.textShadow = ""
                    e_sub_ghabli.target.style.letterSpacing = "0"
                } catch (e) { }
                try {
                    e_speed_ghabli.target.style.opacity = "1"
                    e_speed_ghabli.target.style.background = ""
                    e_speed_ghabli.target.style.color = ""
                    e_speed_ghabli.target.style.borderWidth = ""
                    e_speed_ghabli.target.style.borderImage = ""
                    e_speed_ghabli.target.style.textShadow = ""
                    e_speed_ghabli.target.style.letterSpacing = "0"
                } catch (e) { }
                try {
                    e_theme_ghabli.target.style.opacity = "1"
                    e_theme_ghabli.target.style.background = ""
                    e_theme_ghabli.target.style.color = ""
                    e_theme_ghabli.target.style.borderImage = ""
                    e_theme_ghabli.target.style.borderWidth = ""
                    e_theme_ghabli.target.style.textShadow = ""
                    e_theme_ghabli.target.style.letterSpacing = "0"
                } catch (e) { }
                e_quality_ghabli = e;
                e.target.style.background = BACKGROUND_ST_TR_E
                e.target.style.color = COLOR_ST_TR_E
                e.target.style.textShadow = Text_Shadow_TR_E
                e.target.style.opacity = "1"
                e.target.style.borderWidth = BORDER_WIDTH_BTN_LEVEL1_SETTING
                e.target.style.borderImage = BORDER_COLOR_BTN_LEVEL1_SETTING
                if (State_Effect_Btn_level1 == "Effect") {
                    e.target.style.letterSpacing = "0.3vw"
                }
            } else {
                e.target.style.opacity = "1"
                e.target.style.color = ""
                e.target.style.background = ""
                e.target.style.borderImage = ""
                e.target.style.borderWidth = ""
                e.target.style.textShadow = ""
                e.target.style.letterSpacing = "0"
            }
        }



        function open_or_close_quality_f() {

            if (counter_open_or_close_quality === "open") {
                counter_open_or_close_speed = "open";
                div_for_speed.style.display = "none";
                counter_open_or_close_theme = "open";
                div_sub.style.display = "none";
                counter_open_or_close_subtitle = "open";
                div_for_quality.style.display = "inline-block";
                div_for_theme_level2.style.display = "none";
                div_for_quality.style.opacity = counter_opacity_quality;
                counter_opacity_quality += 0.075;
                if (counter_opacity_quality > 1) {
                    counter_opacity_quality = 1;
                    counter_open_or_close_quality = "close";
                    Set_Fade_Out_For_Div_Show_Setting(div_full_btn_sub_theme_quality)
                    clearInterval(timer_for_open_or_close_quality);
                }
            } else {

                counter_opacity_quality -= 0.080;
                div_for_quality.style.opacity = counter_opacity_quality;
                if (counter_opacity_quality < 0) {
                    counter_opacity_quality = 0;
                    div_for_quality.style.display = "none";
                    counter_open_or_close_quality = "open";
                    clearInterval(timer_for_open_or_close_quality);

                }
            }

        }



        let counter_open_or_close_theme = "open";
        let timer_for_open_or_close_theme = null;
        let counter_opacity_theme = 0;
        function open_or_close_theme(e) {
            clearInterval(timer_for_open_or_close_theme);
            timer_for_open_or_close_theme = setInterval(open_or_close_theme_f, 10);
            if (counter_open_or_close_theme == "open") {
                try {
                    e_quality_ghabli.target.style.opacity = "1"
                    e_quality_ghabli.target.style.background = ""
                    e_quality_ghabli.target.style.color = ""
                    e_quality_ghabli.target.style.borderImage = ""
                    e_quality_ghabli.target.style.borderWidth = ""
                    e_quality_ghabli.target.style.textShadow = ""
                    e_quality_ghabli.target.style.letterSpacing = "0"



                } catch (e) {
                }
                try {
                    e_speed_ghabli.target.style.opacity = "1"
                    e_speed_ghabli.target.style.background = ""
                    e_speed_ghabli.target.style.color = ""
                    e_speed_ghabli.target.style.borderWidth = ""
                    e_speed_ghabli.target.style.borderImage = ""
                    e_speed_ghabli.target.style.textShadow = ""
                    e_speed_ghabli.target.style.letterSpacing = "0"


                } catch (e) { }
                try {
                    e_sub_ghabli.target.style.opacity = "1"
                    e_sub_ghabli.target.style.background = ""
                    e_sub_ghabli.target.style.color = ""
                    e_sub_ghabli.target.style.borderImage = ""
                    e_sub_ghabli.target.style.borderWidth = ""
                    e_sub_ghabli.target.style.textShadow = ""
                    e_sub_ghabli.target.style.letterSpacing = "0"

                } catch (e) { }
                e_theme_ghabli = e;


                e.target.style.background = BACKGROUND_ST_TR_E
                e.target.style.color = COLOR_ST_TR_E
                e.target.style.textShadow = Text_Shadow_TR_E
                e.target.style.opacity = "1"
                e.target.style.borderImage = BORDER_COLOR_BTN_LEVEL1_SETTING
                e.target.style.borderWidth = BORDER_WIDTH_BTN_LEVEL1_SETTING
                if (State_Effect_Btn_level1 == "Effect") {
                    e.target.style.letterSpacing = "0.3vw"
                }

            } else {
                e.target.style.opacity = "1"
                e.target.style.color = ""
                e.target.style.background = ""
                e.target.style.borderImage = ""
                e.target.style.borderWidth = ""
                e.target.style.textShadow = ""
                e.target.style.letterSpacing = "0"

            }
        }

        function open_or_close_theme_f() {
            if (counter_open_or_close_theme == "open") {


                div_for_speed.style.display = "none"
                counter_open_or_close_speed = "open";
                counter_open_or_close_quality = "open";
                counter_open_or_close_subtitle = "open";
                div_sub.style.display = "none";
                div_for_quality.style.display = "none";
                div_for_theme_level2.style.display = "inline-block";
                div_for_theme_level2.style.opacity = counter_opacity_theme;
                counter_opacity_theme += 0.070;
                if (counter_opacity_theme > 1) {
                    counter_opacity_theme = 1;
                    counter_open_or_close_theme = "close"
                    Set_Fade_Out_For_Div_Show_Setting(div_full_btn_sub_theme_quality)
                    clearInterval(timer_for_open_or_close_theme);
                }
            } else {
                counter_opacity_theme -= 0.080;
                div_for_theme_level2.style.opacity = counter_opacity_theme;

                if (counter_opacity_theme < 0) {
                    counter_opacity_theme = 0;
                    clearInterval(timer_for_open_or_close_theme);
                    div_for_theme_level2.style.display = "none";
                    counter_open_or_close_theme = "open"
                }
            }

        }
        btn_theme_for_setting.onclick = function (e) {
            open_or_close_theme(e);
            set_Right_bottom_div_full_btn_for_setting_level2(e)
        };



        let Counter_For_Hidden_Img_btn_Center_For_Rotate_When_Load = "NoLoad"
        let counter_onmouseup_oninput_seek_progress = 0;//bottom-
        let counter_controls_show_onclick_f = "hide"; // bottom-
        let set_time_out_for_hide_controls_f = null; //  for bottom-
        let btn_Ply_Or_Pause_Counter = "ply";
        function btn_ply_or_pause_f() {
            if (btn_Ply_Or_Pause_Counter === "ply") {
                btn_Ply_Or_Pause_Counter = "Pause";
                i_for_btn_ply.className = "fa fa-pause";
                return "ply";
            }
            else {


                btn_Ply_Or_Pause_Counter = "ply";
                i_for_btn_ply.className = "fa fa-play";
                return "pause";
            }
        };
        let couner_height_hide_controls = 1;
        let ints_counter_height_hide_controls = 1;
        let ints_2_counter_height_hide_controls = div_container_Video_controls.clientHeight;
        let Counter_For_Play_Vid = null

        btn_FullScreen.onclick = function () {
            FullScreen_or_reFullScreen()
        };

        let timer_for_btn_cog_for_open = null;
        let timer_for_btn_cog_for_close = null;
        let counter_btn_cog_open_close = "open";
        let Div_Container_Arr = null
        let Div_Container_Arr_Res = null
        btn_cog.onclick = function (e) {

            Div_Container_Arr = e.composedPath()
            try {
                Div_Container_Arr = Div_Container_Arr.filter(function (e) {

                    if (e.className.includes("Cnt_Vid_controls")) {
                        Div_Container_Arr_Res = e
                        return e
                    }
                })
            } catch (e) { }

            Div_Container_Arr_Res = Div_Container_Arr_Res.childNodes
            Div_Container_Arr_Res = Array.prototype.slice.call(Div_Container_Arr_Res)
            Div_Container_Arr_Res = Div_Container_Arr_Res.filter(function (Str_Child_Div_Container__Div_Btn_Cog) {
                if (Str_Child_Div_Container__Div_Btn_Cog.className == "div_for_btn_cog_VIdeo_player_fzl") {
                    return Str_Child_Div_Container__Div_Btn_Cog
                }
            })
            SET_WIDTH_DIV_FOR_SHOW_SETTING = Div_Container_Arr_Res[0].getAttribute("Width_Div_for_Btn_Cog_VIdeo")
            if (counter_btn_cog_open_close === "open") {
                clearInterval(timer_for_btn_cog_for_open);
                timer_for_btn_cog_for_open = setInterval(btn_cog_open, Speed_Open_Setting)
            } else {
                counter_height_div_for_setting_bnt_cog = SET_WIDTH_DIV_FOR_SHOW_SETTING
                clearInterval(timer_for_btn_cog_for_close);
                timer_for_btn_cog_for_close = setInterval(btn_cog_close, Speed_Close_Setting)
            }
        };
        let background_color_btn_level1 = null;
        let timer_for_open_or_close_dropdown_btn_level_1 = null
        let counter_height_div_for_setting_bnt_cog = 0;

        function btn_cog_open() {


            div_full_btn_sub_theme_quality.style.display = "inline-block";
            i_for_btn_cog.style.transform = `rotate(${counter_height_div_for_setting_bnt_cog}deg)`;
            div_for_btn_cog_VIdeo_player_fzl_for_show_setting.style.display = "inline-block";
            counter_height_div_for_setting_bnt_cog += 6;
            div_for_btn_cog_VIdeo_player_fzl_for_show_setting.style.width = counter_height_div_for_setting_bnt_cog;
            if (counter_height_div_for_setting_bnt_cog > SET_WIDTH_DIV_FOR_SHOW_SETTING) {

                clearInterval(timer_for_open_or_close_dropdown_btn_level_1)
                timer_for_open_or_close_dropdown_btn_level_1 = setInterval(drop_dorwn_btn_level1_theme, 8)
                btn_theme_for_setting.style.visibility = "visible"
                clearInterval(timer_for_btn_cog_for_open);
                counter_btn_cog_open_close = "close";

            }
        }

        function btn_cog_close() {
            div_for_speed.style.display = "none"
            counter_open_or_close_speed = "open";
            counter_open_or_close_theme = "open";
            counter_open_or_close_speed = "open";
            counter_open_or_close_quality = "open";
            counter_open_or_close_subtitle = "open";
            div_sub.style.display = "none";
            div_for_quality.style.display = "none";
            div_for_theme_level2.style.display = "none";
            btn_level1_speed.style.background = ""
            btn_level1_speed.style.color = ""
            btn_level1_speed.style.borderWidth = ""
            btn_level1_speed.style.borderImage = ""
            btn_subtitle_for_setting.style.background = ""
            btn_subtitle_for_setting.style.color = ""
            btn_subtitle_for_setting.style.borderImage = ""
            btn_subtitle_for_setting.style.borderWidth = ""
            btn_quality_for_setting.style.background = ""
            btn_quality_for_setting.style.color = ""
            btn_quality_for_setting.style.borderImage = ""
            btn_quality_for_setting.style.borderWidth = ""
            btn_theme_for_setting.style.background = ""
            btn_theme_for_setting.style.color = ""
            btn_theme_for_setting.style.borderImage = ""
            btn_theme_for_setting.style.borderWidth = ""

            div_full_btn_sub_theme_quality.style.display = "none";
            i_for_btn_cog.style.transform = `rotate(-${counter_height_div_for_setting_bnt_cog}deg)`;

            counter_height_div_for_setting_bnt_cog -= 6;
            div_for_btn_cog_VIdeo_player_fzl_for_show_setting.style.width = counter_height_div_for_setting_bnt_cog;
            if (counter_height_div_for_setting_bnt_cog < 0) {
                Close_Cog_Op()
            }
        }

        function Close_Cog_Op(){
            
            div_for_btn_cog_VIdeo_player_fzl_for_show_setting.style.display = "none";
            counter_btn_cog_open_close = "open";
            btn_level1_speed.style.visibility = "hidden"
            btn_theme_for_setting.style.visibility = "hidden"
            btn_subtitle_for_setting.style.visibility = "hidden"
            btn_quality_for_setting.style.visibility = "hidden"
            btn_subtitle_for_setting.style.opacity = counter_for_add_width_btn_theme_level1
            btn_theme_for_setting.style.opacity = counter_for_add_width_btn_theme_level1
            btn_quality_for_setting.style.opacity = counter_for_add_width_btn_theme_level1
            btn_level1_speed.style.opacity = counter_for_add_width_btn_theme_level1
            clearInterval(timer_for_btn_cog_for_close);
        }


        let timer_for_open_or_close_dropdown_btn_level_1_loop = null
        let counter_for_add_width_btn_theme_level1 = 0
        function drop_dorwn_btn_level1_theme() {
            btn_quality_for_setting.style.opacity = 0;
            btn_theme_for_setting.style.opacity = 0;
            btn_level1_speed.style.opacity = 0;
            btn_subtitle_for_setting.style.opacity = 0;
            btn_theme_for_setting.style.opacity = counter_for_add_width_btn_theme_level1;
            counter_for_add_width_btn_theme_level1 += 0.070
            if (counter_for_add_width_btn_theme_level1 > 1) {
                clearInterval(timer_for_open_or_close_dropdown_btn_level_1_loop)
                timer_for_open_or_close_dropdown_btn_level_1_loop = setInterval(drop_dorwn_btn_level1_loop, 8)
                btn_level1_speed.style.visibility = "visible"
                counter_for_add_width_btn_theme_level1 = 0
                clearInterval(timer_for_open_or_close_dropdown_btn_level_1)
            }
        }
        let timer_for_open_or_close_dropdown_btn_level1_sub = null;
        let counter_for_add_width_btn_loop_level1 = 0
        function drop_dorwn_btn_level1_loop() {
            btn_level1_speed.style.opacity = counter_for_add_width_btn_loop_level1;
            counter_for_add_width_btn_loop_level1 += 0.080
            if (counter_for_add_width_btn_loop_level1 > 1) {
                clearInterval(timer_for_open_or_close_dropdown_btn_level1_sub)
                timer_for_open_or_close_dropdown_btn_level1_sub = setInterval(drop_dorwn_btn_level1_sub, 8)
                counter_for_add_width_btn_loop_level1 = 0
                btn_subtitle_for_setting.style.visibility = "visible"
                clearInterval(timer_for_open_or_close_dropdown_btn_level_1_loop)

            }
        }
        let timer_for_open_or_close_dropdown_btn_level1_quality = null;
        let counter_for_add_width_btn_sub_level1 = 0
        function drop_dorwn_btn_level1_sub() {
            btn_subtitle_for_setting.style.opacity = counter_for_add_width_btn_sub_level1;
            counter_for_add_width_btn_sub_level1 += 0.070
            if (counter_for_add_width_btn_sub_level1 > 1) {
                clearInterval(timer_for_open_or_close_dropdown_btn_level1_quality)
                timer_for_open_or_close_dropdown_btn_level1_quality = setInterval(drop_dorwn_btn_level1_quality, 14)
                counter_for_add_width_btn_sub_level1 = 0
                btn_quality_for_setting.style.visibility = "visible"
                clearInterval(timer_for_open_or_close_dropdown_btn_level1_sub)
            }
        }

        let counter_for_add_width_btn_quality_level1 = 0
        function drop_dorwn_btn_level1_quality() {
            btn_quality_for_setting.style.opacity = counter_for_add_width_btn_quality_level1;
            counter_for_add_width_btn_quality_level1 += 0.080
            if (counter_for_add_width_btn_quality_level1 > 1) {
                counter_for_add_width_btn_quality_level1 = 0
                clearInterval(timer_for_open_or_close_dropdown_btn_level1_quality)
            }

        }




        
        let counter_FullScreen_or_reFullScreen = "FullScreen";
        $(document).bind('webkitfullscreenchange mozfullscreenchange fullscreenchange', function () {
            let state = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
            let event = state ? 'FullscreenOn' : 'FullscreenOff';
            if (event === 'FullscreenOff') {
                video.clientHeight = video.getAttribute("Video_Heigh_For_FullScreen") ;
                set_fon_size_for_timeduration_and_timecurrent_and_set_widt_height_btn_img_center();
                counter_FullScreen_or_reFullScreen = "FullScreen";
                i_for_btn_FullScreen.className = "fa fa-expand";
        
            } else {
                video.clientHeight="100%"
                set_fon_size_for_timeduration_and_timecurrent_and_set_widt_height_btn_img_center();
                i_for_btn_FullScreen.className = "fa fa-compress";
                counter_FullScreen_or_reFullScreen = "reFullscreen"
            }
        });
    
 
        video.ondblclick = function () {
            FullScreen_or_reFullScreen()
        }
        function FullScreen_or_reFullScreen() {

            if (counter_FullScreen_or_reFullScreen === "FullScreen") {
                video.style.height = "100%"
                if (div_container_Video.requestFullscreen) {
                    div_container_Video.requestFullscreen()
                } else if (div_container_Video.webkitIsFullScreen) {
                    div_container_Video.webkitIsFullScreen()
                } else if (div_container_Video.mozRequestFullScreen) {
                    div_container_Video.mozRequestFullScreen()
                } else if (div_container_Video.msRequestFullscreen) {
                    div_container_Video.msRequestFullscreen()
                }
                set_fon_size_for_timeduration_and_timecurrent_and_set_widt_height_btn_img_center();
                controls_show_f();
                i_for_btn_FullScreen.className = "fa fa-compress";
                counter_FullScreen_or_reFullScreen = "reFullscreen"
            } else {
                video.style.height = video.getAttribute("Video_Heigh_For_FullScreen") 
                set_fon_size_for_timeduration_and_timecurrent_and_set_widt_height_btn_img_center();
         
                if (document.exitFullscreen) {
                    document.exitFullscreen()
                }
                else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen()
                }
                else if (document.msExitFullscreen) {
                    document.msExitFullscreen()
                }
                else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen()
                }
                counter_FullScreen_or_reFullScreen = "FullScreen";
                i_for_btn_FullScreen.className = "fa fa-expand";
            }
        }




        location.reload = function () {
            responsive()
            set_fon_size_for_timeduration_and_timecurrent_and_set_widt_height_btn_img_center();


        };
        window.onload = function () {
            responsive()
            set_fon_size_for_timeduration_and_timecurrent_and_set_widt_height_btn_img_center()
        }

        window.onresize = function () {
            responsive()
            set_fon_size_for_timeduration_and_timecurrent_and_set_widt_height_btn_img_center();
        };






        btn_ply_or_pause.onclick = function () {

            if (btn_ply_or_pause_f() == "ply") {

                video.play();
                if (Counter_For_Hidden_Img_btn_Center_For_Rotate_When_Load == "NoLoad") {
                    img_btn_center_video.hidden = true;
                }


            } else {

                video.pause()
            }
        }
        let res_current_time_video = null;
        let min_res = null;
        let sec_res = null;
        let hr_res = null;
        function current_time_duration_set_darsad() {
            res_current_time_video = video.currentTime;
            sec_res = res_current_time_video % 59.999999;
            sec_res = String(sec_res).split(".")[0];
            sec_res = Number(sec_res);
            min_res = res_current_time_video / 60;

            if (min_res > 59.9999) {
                min_res -= 60;
            }
            min_res = String(min_res).split(".")[0];
            min_res = Number(min_res);

            hr_res = res_current_time_video / 3600;
            hr_res = String(hr_res).split(".")[0];
            hr_res = Number(hr_res)

            set_darsad()

        }

        function set_darsad() {
            p_for_darsad_baghi.style.display = "inline-block"

            let darsad_baghimande = (video.currentTime / video.duration).toFixed(2)
            darsad_baghimande = darsad_baghimande.split(".")
            let res_darsad = Number(darsad_baghimande[1])

            if (darsad_baghimande[0] == 1) {
                res_darsad = 100 + "%"
            }
            p_for_darsad_baghi.innerHTML = 100 - res_darsad + "%"
            if (p_for_darsad_baghi.innerHTML == NaN || p_for_darsad_baghi.innerHTML == null || p_for_darsad_baghi.innerHTML == "NaN%") {
                p_for_darsad_baghi.innerHTML = ""
                p_for_darsad_baghi.style.display = "none"
            }
        }
        let hr_res_duration = null;
        let min_res_duration = null;
        let sec_res_duration = null;
        function set_max_duration_and_timeduration() {

            let video_duration = video.duration;

            input_seek_and_progres_video.max = video_duration;
            hr_res_duration = video_duration / 3600;
            hr_res_duration = String(hr_res_duration).split(".")[0];
            hr_res_duration = Number(hr_res_duration);

            min_res_duration = video_duration / 60;
            if (min_res_duration > 59) {
                min_res_duration -= 60;
            }
            min_res_duration = String(min_res_duration).split(".")[0];
            min_res_duration = Number(min_res_duration);


            sec_res_duration = video_duration % 59.9999;
            sec_res_duration = String(sec_res_duration).split(".")[0];
            sec_res_duration = Number(sec_res_duration);

            if (sec_res_duration > 9) {
                p_duration_sec.innerHTML = sec_res_duration;
            }
            else {
                p_duration_sec.innerHTML = "0" + sec_res_duration
            }
            if (min_res_duration > 9) {
                p_duration_min.innerHTML = ":" + min_res_duration + ":"
            }
            else {
                p_duration_min.innerHTML = ":" + "0" + min_res_duration + ":"
            }
            p_duration_hr.innerHTML = hr_res_duration

        };
        let counter_for_ply_or_not_play_seek = 0;






        let Counter_For_Show_Or_Hide_P_Time_Seek_Input = "Show"
        input_seek_and_progres_video.onmousemove = function (e) {
            Counter_For_Show_Or_Hide_P_Time_Seek_Input = "Show"
            Set_Show_Or_Hide_p_Time_Curent_Input_Seek(e)
        }
        input_seek_and_progres_video.onmouseover = function (e) {
            Counter_For_Show_Or_Hide_P_Time_Seek_Input = "Show"
            Set_Show_Or_Hide_p_Time_Curent_Input_Seek(e)
        }
        input_seek_and_progres_video.onmouseleave = function (e) {
            Counter_For_Show_Or_Hide_P_Time_Seek_Input = "Hide"
            Set_Show_Or_Hide_p_Time_Curent_Input_Seek(e)
        }
        input_seek_and_progres_video.onmouseout = function (e) {
            Counter_For_Show_Or_Hide_P_Time_Seek_Input = "Hide"
            Set_Show_Or_Hide_p_Time_Curent_Input_Seek(e)
        }



        input_seek_and_progres_video.ontouchstart = function (e) {
            Counter_For_Show_Or_Hide_P_Time_Seek_Input = "Show"
            input_seek_and_progres_video_Down();
            Set_Show_Or_Hide_p_Time_Curent_Input_Seek_Touch(e)
        }
        input_seek_and_progres_video.ontouchend = function (e) {
            Set_progres()
            input_seek_and_progres_video_Up()
            Counter_For_Show_Or_Hide_P_Time_Seek_Input = "Hide"
            Set_Show_Or_Hide_p_Time_Curent_Input_Seek_Touch(e)
        }
        input_seek_and_progres_video.ontouchmove = function (e) {
            Counter_For_Show_Or_Hide_P_Time_Seek_Input = "Show"
            Set_Show_Or_Hide_p_Time_Curent_Input_Seek_Touch(e)
        }


        let Arr_Child_Input_Seek_Progres = null
        let TImer_For_Plus_Opacity_P_For_Input_Seek = null
        let TImer_For_Miunes_Opacity_P_For_Input_Seek = null
        let Counter_Opacity_For_Show_Current_Time = 0
        function Set_Show_Or_Hide_p_Time_Curent_Input_Seek_Touch(e) {

            let Width_Input_For_Set_Show_Current = e.target.getBoundingClientRect();
            let Show_Current_Time_Input_Seek = null
            Show_Current_Time_Input_Seek = e.changedTouches[0].pageX - Width_Input_For_Set_Show_Current.left;
            Counter_layerX_For_Time_Show_Current = Show_Current_Time_Input_Seek
            Arr_Child_Input_Seek_Progres = e.composedPath()
            Arr_Child_Input_Seek_Progres = Arr_Child_Input_Seek_Progres.filter(function (e) {
                if (e.className == "div_slider") {
                    return e
                }
            });
            Arr_Child_Input_Seek_Progres = Arr_Child_Input_Seek_Progres[0].children
            Arr_Child_Input_Seek_Progres = Array.prototype.slice.call(Arr_Child_Input_Seek_Progres)
            Arr_Child_Input_Seek_Progres = Arr_Child_Input_Seek_Progres.filter(function (e) {
                if (e.className == "Show_Time_Curent_Input_Seek") {
                    return e
                }
            })
            Arr_Child_Input_Seek_Progres = Arr_Child_Input_Seek_Progres[0]
            Arr_Child_Input_Seek_Progres.style.left = Show_Current_Time_Input_Seek - (Arr_Child_Input_Seek_Progres.clientWidth / 2)
            if (Show_Current_Time_Input_Seek < 0) {
                Arr_Child_Input_Seek_Progres.style.left = -(Arr_Child_Input_Seek_Progres.clientWidth / 2)
                Counter_layerX_For_Time_Show_Current = 0
            }
            if (Show_Current_Time_Input_Seek > input_seek_and_progres_video.clientWidth) {
                Arr_Child_Input_Seek_Progres.style.left = input_seek_and_progres_video.clientWidth - (Arr_Child_Input_Seek_Progres.clientWidth / 2)
                Counter_layerX_For_Time_Show_Current = input_seek_and_progres_video.clientWidth
            }
            if (Counter_For_Show_Or_Hide_P_Time_Seek_Input == "Show") {
                clearInterval(TImer_For_Miunes_Opacity_P_For_Input_Seek)
                clearInterval(TImer_For_Plus_Opacity_P_For_Input_Seek)
                TImer_For_Plus_Opacity_P_For_Input_Seek = setInterval(TImer_For_Plus_Opacity_P_For_Input_Seek_F, 10)
            } else if (Counter_For_Show_Or_Hide_P_Time_Seek_Input == "Hide") {

                clearInterval(TImer_For_Miunes_Opacity_P_For_Input_Seek)
                clearInterval(TImer_For_Plus_Opacity_P_For_Input_Seek)
                TImer_For_Miunes_Opacity_P_For_Input_Seek = setInterval(TImer_For_Miunes_Opacity_P_For_Input_Seek_F, 12)
            }
            Set_Time_For_Show_Current_Time(Counter_layerX_For_Time_Show_Current)
        }
        let Counter_layerX_For_Time_Show_Current = null
        function Set_Show_Or_Hide_p_Time_Curent_Input_Seek(e) {

            Counter_layerX_For_Time_Show_Current = e.layerX
            Arr_Child_Input_Seek_Progres = e.composedPath()

            Arr_Child_Input_Seek_Progres = Arr_Child_Input_Seek_Progres.filter(function (e) {
                if (e.className == "div_slider") {
                    return e
                }
            });
            Arr_Child_Input_Seek_Progres = Arr_Child_Input_Seek_Progres[0].children
            Arr_Child_Input_Seek_Progres = Array.prototype.slice.call(Arr_Child_Input_Seek_Progres)
            Arr_Child_Input_Seek_Progres = Arr_Child_Input_Seek_Progres.filter(function (e) {
                if (e.className == "Show_Time_Curent_Input_Seek") {
                    return e
                }
            })

            Arr_Child_Input_Seek_Progres = Arr_Child_Input_Seek_Progres[0]

            Arr_Child_Input_Seek_Progres.style.left = e.layerX - (Arr_Child_Input_Seek_Progres.clientWidth / 2)
            if (e.layerX < 0) {
                Arr_Child_Input_Seek_Progres.style.left = -(Arr_Child_Input_Seek_Progres.clientWidth / 2)
                Counter_layerX_For_Time_Show_Current = 0
            }
            if (e.layerX > input_seek_and_progres_video.clientWidth) {
                Arr_Child_Input_Seek_Progres.style.left = input_seek_and_progres_video.clientWidth - (Arr_Child_Input_Seek_Progres.clientWidth / 2)
                Counter_layerX_For_Time_Show_Current = input_seek_and_progres_video.clientWidth
            }
            if (Counter_For_Show_Or_Hide_P_Time_Seek_Input == "Show") {

                clearInterval(TImer_For_Miunes_Opacity_P_For_Input_Seek)
                clearInterval(TImer_For_Plus_Opacity_P_For_Input_Seek)
                TImer_For_Plus_Opacity_P_For_Input_Seek = setInterval(TImer_For_Plus_Opacity_P_For_Input_Seek_F, 10)
            } else if (Counter_For_Show_Or_Hide_P_Time_Seek_Input == "Hide") {
                let isFirefox = typeof InstallTrigger !== 'undefined';
                if (isFirefox) {
                    Arr_Child_Input_Seek_Progres.style.display = "none"
                }
                clearInterval(TImer_For_Miunes_Opacity_P_For_Input_Seek)
                clearInterval(TImer_For_Plus_Opacity_P_For_Input_Seek)

                TImer_For_Miunes_Opacity_P_For_Input_Seek = setInterval(TImer_For_Miunes_Opacity_P_For_Input_Seek_F, 14)
            }
            Set_Time_For_Show_Current_Time(Counter_layerX_For_Time_Show_Current)
        }



        function TImer_For_Plus_Opacity_P_For_Input_Seek_F() {
            Arr_Child_Input_Seek_Progres.style.display = "block"
            Arr_Child_Input_Seek_Progres.style.opacity = Counter_Opacity_For_Show_Current_Time
            Counter_Opacity_For_Show_Current_Time += 0.1
            if (Counter_Opacity_For_Show_Current_Time > 1) {
                Counter_Opacity_For_Show_Current_Time = 1
                clearInterval(TImer_For_Plus_Opacity_P_For_Input_Seek)
            }
        }

        function TImer_For_Miunes_Opacity_P_For_Input_Seek_F() {

            Arr_Child_Input_Seek_Progres.style.opacity = Counter_Opacity_For_Show_Current_Time
            Counter_Opacity_For_Show_Current_Time -= 0.1
            if (Counter_Opacity_For_Show_Current_Time < 0) {
                Counter_Opacity_For_Show_Current_Time = 0
                Arr_Child_Input_Seek_Progres.style.display = "none"
                clearInterval(TImer_For_Miunes_Opacity_P_For_Input_Seek)
            }
        }


        let sec_res_ShowCurrent = null
        let min_res_ShowCurrent = null
        let hr_res_ShowCurrent = null

        function Set_Time_For_Show_Current_Time(e) {
            let Time_Video_Show_Current_TIme = (e / input_seek_and_progres_video.clientWidth) * 100
            Time_Video_Show_Current_TIme = (Time_Video_Show_Current_TIme / 100) * video.duration

            sec_res_ShowCurrent = Time_Video_Show_Current_TIme % 59.9999999
            if (Time_Video_Show_Current_TIme < 60) {
                sec_res_ShowCurrent = sec_res_ShowCurrent.toFixed(2)
            } else {
                sec_res_ShowCurrent = String(sec_res_ShowCurrent).split(".")[0];
                sec_res_ShowCurrent = Number(sec_res_ShowCurrent);
            }
            min_res_ShowCurrent = Time_Video_Show_Current_TIme / 60
            if (min_res_ShowCurrent > 59.999) {
                min_res_ShowCurrent -= 60
            }
            min_res_ShowCurrent = String(min_res_ShowCurrent).split(".")[0];
            min_res_ShowCurrent = Number(min_res_ShowCurrent);

            hr_res_ShowCurrent = Time_Video_Show_Current_TIme / 3600
            hr_res_ShowCurrent = String(hr_res_ShowCurrent).split(".")[0];
            hr_res_ShowCurrent = Number(hr_res_ShowCurrent)


            if (min_res_ShowCurrent == 0) {
                p_sec_ShowCurrent_time.style.width = "100%"
                p_min_ShowCurrent_time.style.width = "0%"
                p_min_ShowCurrent_time.style.display = "none"
            }
            else {
                p_sec_ShowCurrent_time.style.width = "50%"
                p_min_ShowCurrent_time.style.width = "50%"
                p_min_ShowCurrent_time.style.display = "inline-block"
            }

            if (hr_res_ShowCurrent == 0) {
                p_min_ShowCurrent_time.style.width = "50%"
                p_hr_ShowCurrent_time.style.width = "0%"

                p_hr_ShowCurrent_time.style.display = "none"
            } else {
                p_sec_ShowCurrent_time.style.width = "33%"
                p_min_ShowCurrent_time.style.width = "33%"
                p_hr_ShowCurrent_time.style.width = "33%"
                p_hr_ShowCurrent_time.style.display = "inline-block"
            }

            if (hr_res_ShowCurrent != 0 && p_min_ShowCurrent_time != 0) {
                p_sec_ShowCurrent_time.style.width = "33%"
                p_min_ShowCurrent_time.style.width = "33%"
                p_hr_ShowCurrent_time.style.width = "33%"
                p_min_ShowCurrent_time.style.display = "inline-block"
                p_hr_ShowCurrent_time.style.display = "inline-block"
            }
            p_sec_ShowCurrent_time.innerHTML = sec_res_ShowCurrent
            p_min_ShowCurrent_time.innerHTML = min_res_ShowCurrent
            p_hr_ShowCurrent_time.innerHTML = hr_res_ShowCurrent

            if (sec_res_ShowCurrent == NaN || sec_res_ShowCurrent == "NaN") {
                p_sec_ShowCurrent_time.innerHTML = "0"
                p_min_ShowCurrent_time.innerHTML = "0"
                p_hr_ShowCurrent_time.innerHTML = "0"
            }
        }





        input_seek_and_progres_video.onmousedown = input_seek_and_progres_video_Down;
        input_seek_and_progres_video.onmouseup = input_seek_and_progres_video_Up;
        function input_seek_and_progres_video_Up() {
            Counter_For_OnmouseUp_Input_Seek_To_Load_Video_And_Rotate = "Loading"

            if (counter_for_oninput_for_play_or_not_play == "ply" || counter_for_ply_or_not_play_seek == 1) {
                video.play();

            } else if (counter_for_ply_or_not_play_seek = 0 || counter_for_oninput_for_play_or_not_play == "not_ply") {

                video.pause();
            }

        };


        function input_seek_and_progres_video_Down() {
            Counter_For_OnmouseUp_Input_Seek_To_Load_Video_And_Rotate = "NoLoading"
            Counter_For_Rotate_Img_Btn = 1
            img_btn_center_video.hidden = false

            video.currentTime = input_seek_and_progres_video.value;
            i_for_btn_ply.className = "fa fa-play";
            if (counter_for_oninput_for_play_or_not_play == "ply") {
                counter_for_ply_or_not_play_seek = 1
            } else {
                counter_for_ply_or_not_play_seek = 0
            }
            video.pause();
        }

        input_seek_and_progres_video.oninput = function () {
            Set_Img_Btn_Center_Rotate_Wait()
            background_input.style.width = ((input_seek_and_progres_video.clientWidth / video.duration) * input_seek_and_progres_video.value)
            Set_progres()
        };
        function Set_progres() {
            video.currentTime = input_seek_and_progres_video.value;
            set_current_time_video()
            set_value_progres_seek()
        };






        let State_Img_Btn_Center_Hidden = null
        function Set_Img_Btn_Center_Rotate_Wait() {
            State_Img_Btn_Center_Hidden = img_btn_center_video.hidden
            if (video.readyState != 4 || video.readyState != 3 || video.readyState != 1 || video.readyState != 2) {
                Counter_Img_For_LoadData_and_Set_Btn_onClick = "NoClick"
                img_btn_center_video.style.cursor = "default"
                img_btn_center_video.hidden = false
                Counter_For_Rotate_Img_Btn = 1
                clearInterval(Timer_For_Rotate_Img_Btn_Load)
                Timer_For_Rotate_Img_Btn_Load = setInterval(Timer_For_Rotate_Img_Btn_Load_F, Speed_Rotate_Btn_Center)

            } else {
                Counter_Img_For_LoadData_and_Set_Btn_onClick = "Click"
                img_btn_center_video.style.cursor = "pointer"
                img_btn_center_video.style.opacity = 1
                clearInterval(Timer_For_Rotate_Img_Btn_Load)
            }
            if (video.readyState == 4) {
                img_btn_center_video.hidden = State_Img_Btn_Center_Hidden
                Counter_Img_For_LoadData_and_Set_Btn_onClick = "Click"
                img_btn_center_video.style.cursor = "pointer"
                img_btn_center_video.style.opacity = 1
                clearInterval(Timer_For_Rotate_Img_Btn_Load)
            }
            if (video.readyState == 3) {
                img_btn_center_video.hidden = State_Img_Btn_Center_Hidden
                Counter_Img_For_LoadData_and_Set_Btn_onClick = "Click"
                img_btn_center_video.style.cursor = "pointer"
                img_btn_center_video.style.opacity = 1
                clearInterval(Timer_For_Rotate_Img_Btn_Load)
            }
            // if (video.readyState == 2) {
            //     img_btn_center_video.hidden = State_Img_Btn_Center_Hidden
            //     Counter_Img_For_LoadData_and_Set_Btn_onClick = "Click"
            //     img_btn_center_video.style.cursor = "pointer"
            //     img_btn_center_video.style.opacity = 1
            //     clearInterval(Timer_For_Rotate_Img_Btn_Load)
            // }

        }
















        let Ads = div_container_Video.getElementsByTagName("ad")
        if (Ads.length > 1) {
            throw RangeError(`The number of ad tags is more than allowed in video ${couter_create_video_player - 1}`)
        }
        let a_Addres_Ad = document.createElement("a")
        let btn_for_Skip_ad = document.createElement("button")
        video.setAttribute("Counter_for_Show_or_No_Show_Control_for_Ad", "Show")
        let img_for_Ad
        let Timer_For_Counter_Skip_Ad
        let Counter_for_Set_Ad = 0
        let Src_Video_after_ad
        let Counter_play_or_pause_for_ad = "pause"
        let Counter_for_Skip_ad
        let Counter_For_Random_F = 0
        let Src_Ad
        function Random_Ad() {
            if (Counter_For_Random_F == 0) {
                Counter_For_Random_F = 1

                let State_Random = video.getElementsByTagName("ad")[0].getAttribute("random")
                if (State_Random != null) {

                    let Counter_Random_Math = Math.random() * 10
                    Counter_Random_Math = Counter_Random_Math.toFixed(0);
                    if (State_Random == "") {
                        State_Random = 4
                    }
                    State_Random = Number(State_Random)
                    State_Random += 1
                    Counter_Random_Math = Number(Counter_Random_Math)
                    Counter_Random_Math += 1
                    if (Counter_Random_Math >= State_Random) {
                        Counter_for_Set_Ad = 1
                    } else {
                        Counter_for_Set_Ad = 0
                    }
                } else {
                    Counter_for_Set_Ad = 0
                }

            }
            set_darsad()

        }


        function Set_Again_Ad() {
            Counter_For_Random_F = 0
            Random_Ad()
        }
        function Run_Ad() {
            Ads = video.getElementsByTagName("ad")
            if (Ads.length == 1) {
                Random_Ad()
                if (Counter_for_Set_Ad == 0) {
                    State_Current_Time_For_ad_For_Set_Again_After_Ad = "ad"
                    Src_Video_after_ad = video.getElementsByTagName("source")[0].getAttribute("src")
                    try {
                        Src_Ad = video.getElementsByTagName("ad")[0].getAttribute("src")
                    } catch (e) { }

                    disabled_btns_controls()
                    Close_Cog_Op()
                    Counter_for_Set_Ad = 1
                    Ads = Ads[0]
                    div_container_Video.appendChild(btn_for_Skip_ad)
                    div_container_Video.appendChild(a_Addres_Ad)
                    btn_for_Skip_ad.className = "Btn_Skip_Ad btn btn-danger"
                    a_Addres_Ad.className = `btns_control_${_Theme_} a_for_Ad`
                    a_Addres_Ad.href = Ads.getAttribute("addres-ad")
                    a_Addres_Ad.target = "_blank"
                    a_Addres_Ad.innerHTML = "View&nbsp;<i class='fa fa-eye' style=' text-align: center;'></i>"
                    a_Addres_Ad.style.left = 50 - ((a_Addres_Ad.clientWidth / 2) / div_container_Video.clientWidth) + "%"
                    if (Ads.getAttribute("addres-ad")) { } else {
                        a_Addres_Ad.removeAttribute("href")
                    }
                    div_container_Video_controls.style.opacity = 0.0
                    div_container_Video_controls.style.display = "none";
                    div_container_Video_controls.style.cursor = "default";
                    Counter_for_Skip_ad = Ads.getAttribute("time-reject")
                    btn_for_Skip_ad.innerHTML = Counter_for_Skip_ad + " To Skip"
                    let Type_Ad = Src_Ad.split(".")[1]
                    video.setAttribute("Counter_for_Show_or_No_Show_Control_for_Ad", "Hide")
                    if (Type_Ad == "mp4" || Type_Ad == "ogg" || Type_Ad == "webm") {
                        video.getElementsByTagName("source")[0].onerror = function () {
                            a_Addres_Ad.style.display = "none"
                            btn_for_Skip_ad.style.display = "none"
                            Counter_for_Btn_Skip_ad = "Skip"
                            Set_Video_after_ad()
                        }
                        video.getElementsByTagName("source")[0].setAttribute("src", Src_Ad)
                        video.load()
                        video.play()
                        video.addEventListener("click", play_or_pause_Ad)
                        video.onended = function (e) {
                            Counter_for_Btn_Skip_ad = "Skip"
                            Set_Video_after_ad()
                        }

                    } else if (Type_Ad == "png" || Type_Ad == "jpg" || Type_Ad == "gif") {
                        video.pause()
                        img_for_Ad = document.createElement("img")
                        div_container_Video.appendChild(img_for_Ad)
                        img_for_Ad.className = "img_for_Ad"
                        img_for_Ad.src = Src_Ad
                        img_for_Ad.onerror = function () {
                            Counter_for_Btn_Skip_ad = "Skip"
                            Set_Video_after_ad()
                        }
                    }
                    div_container_Video.getElementsByClassName("btn_center_img")[0].style.visibility = "hidden"
                    clearInterval(Timer_For_Counter_Skip_Ad)
                    Timer_For_Counter_Skip_Ad = setInterval(Timer_For_Skip_ad, 1000)
                }
            }

        }


        function play_or_pause_Ad() {
            if (Counter_play_or_pause_for_ad == "pause") {
                video.pause()
                Counter_play_or_pause_for_ad = "play"
                clearInterval(Timer_For_Counter_Skip_Ad)
            } else {
                video.play()
                Counter_play_or_pause_for_ad = "pause"
                clearInterval(Timer_For_Counter_Skip_Ad)
                Timer_For_Counter_Skip_Ad = setInterval(Timer_For_Skip_ad, 1000)
            }
        }
        let Counter_for_Btn_Skip_ad = "NoSkip"
        function Timer_For_Skip_ad() {
            Counter_for_Skip_ad -= 1;
            btn_for_Skip_ad.innerHTML = Counter_for_Skip_ad + " To Skip"
            if (Counter_for_Skip_ad == 0 || Counter_for_Skip_ad < 0) {
                btn_for_Skip_ad.className = "btn btn-success Btn_Skip_Ad"
                btn_for_Skip_ad.innerHTML = "Skip"
                btn_for_Skip_ad.addEventListener("click", Set_Video_after_ad)
                Counter_for_Btn_Skip_ad = "Skip"
                clearInterval(Timer_For_Counter_Skip_Ad)
            }
        }
        function Set_Video_after_ad() {

            if (Counter_for_Btn_Skip_ad == "Skip") {
                div_container_Video.getElementsByClassName("btn_center_img")[0].style.visibility = "hidden"
                State_Current_Time_For_ad_For_Set_Again_After_Ad = "NoAd"
                let j = div_container_Video.children
                j = Array.prototype.slice.call(j)
                j.filter(function (e) {
                    let r = Array.prototype.slice.call(e.classList)
                    r.filter(function (z) {
                        if (z == "Btn_Skip_Ad" || z == "a_for_Ad" || z == "img_for_Ad") {
                            div_container_Video.removeChild(e)
                        }
                    })
                })

                let t = Src_Video_after_ad
                video.getElementsByTagName("source")[0].setAttribute("src", t)
                video.removeEventListener("click", play_or_pause_Ad)
                video.setAttribute("Counter_for_Show_or_No_Show_Control_for_Ad", "Show")
                controls_show_f()
                try {
                    document.removeChild(img_for_Ad)
                } catch (e) { }
                try {
                    video.load()
                    video.currentTime = Time_Vid_for_After_Ad
                    video.play()
                } catch (e) { }

                clearInterval(Timer_For_Counter_Skip_Ad)
            }
        }







        let timer_set_current = null;
        function set_value_progres_seek() {
            input_seek_and_progres_video.value = video.currentTime;
            background_input.style.width = ((input_seek_and_progres_video.clientWidth / video.duration) * input_seek_and_progres_video.value)

        }

        function set_current_time_video() {
            current_time_duration_set_darsad();

            if (sec_res < 9) {
                p_currentTime_sec.innerHTML = "0" + sec_res
            }
            else {
                p_currentTime_sec.innerHTML = sec_res
            }
            if (min_res < 9) {
                p_currentTime_min.innerHTML = ":" + "0" + min_res + ":"
            }
            else {
                p_currentTime_min.innerHTML = ":" + min_res + ":"
            }
            p_currentTime_hr.innerHTML = hr_res;

        }

        let btn_mute_or_unmute_volume = null;
        video.volume = 0.5;
        if (DEVICE == "Mobile" || DEVICE == "Tablet ") {
            input_volume.style.display = "none"
            input_volume.style.visibility = "hidden"
            input_volume.disabled = true
            input_volume.hidden = true
        }

        input_volume.oninput = function () {
            conter_hide_div_video_for_mouse_fixed = 0
            set_volume_f()
        };
        input_volume.onchange = function () {
            conter_hide_div_video_for_mouse_fixed = 0
        }
        function set_volume_f() {



            if (input_volume.value == 0) {
                i_for_btn_mute_or_unmute.className = "fa fa-volume-off"
            }


            if (input_volume.value > 0 && input_volume.value < 0.5) {

                i_for_btn_mute_or_unmute.className = "fa fa-volume-down"
            }
            else {
                i_for_btn_mute_or_unmute.className = "fa fa-volume-up"
            }
            btn_mute_or_unmute_volume = input_volume.value;
            video.volume = input_volume.value;
            btn_mute_or_unmute_counter = "unmute";

            if (input_volume.value == 0) {
                btn_mute_or_unmute_counter = "mute";
            }
            btn_mute_unmute_f()
        };

        let btn_mute_or_unmute_counter = "mute";
        let timer_for_open_input_volume = null
        let timer_for_close_input_volume = null
        let counter_for_open_iput_volume = 0
        div_container_Video.getElementsByClassName("input_volume")[0].getAttribute("Width_Input")
        btn_mute_or_unmute.onclick = btn_mute_unmute_f;


        div_btn_mute_input_volume.onmouseover = set_interval_for_open_input_volume
        div_btn_mute_input_volume.onmouseleave = set_interval_for_close_input_volume
        btn_mute_or_unmute.onmouseover = set_interval_for_open_input_volume;
        btn_mute_or_unmute.onmouseleave = set_interval_for_close_input_volume;
        input_volume.onmouseover = set_interval_for_open_input_volume
        input_volume.onmouseleave = set_interval_for_close_input_volume


        function set_interval_for_open_input_volume() {

            input_volume.style.display = "inline-block"
            clearInterval(timer_for_close_input_volume)
            clearInterval(timer_for_open_input_volume)
            timer_for_open_input_volume = setInterval(open_input_volume_f, 7)
        }
        function open_input_volume_f() {
            input_volume.style.width = counter_for_open_iput_volume
            counter_for_open_iput_volume += 2

            if (counter_for_open_iput_volume > div_container_Video.getElementsByClassName("input_volume")[0].getAttribute("Width_Input")) {
                counter_for_open_iput_volume = div_container_Video.getElementsByClassName("input_volume")[0].getAttribute("Width_Input")
                clearInterval(timer_for_open_input_volume)
                clearInterval(timer_for_close_input_volume)
            }
        }

        function set_interval_for_close_input_volume() {
            clearInterval(timer_for_open_input_volume)
            clearInterval(timer_for_close_input_volume)
            timer_for_close_input_volume = setInterval(close_input_volume_f, 10)
        }
        function close_input_volume_f() {
            input_volume.style.width = counter_for_open_iput_volume;
            counter_for_open_iput_volume -= 2
            if (counter_for_open_iput_volume < 10) {
                input_volume.style.display = "none"
                counter_for_open_iput_volume = 0
                clearInterval(timer_for_close_input_volume)
                clearInterval(timer_for_open_input_volume)

            }
        }

        function btn_mute_unmute_f() {


            if (btn_mute_or_unmute_counter == "mute") {

                input_volume.value = 0;
                video.muted = true;
                btn_mute_or_unmute_counter = "unmute";
                i_for_btn_mute_or_unmute.className = "fa fa-volume-off"

            } else {

                video.muted = false;

                video.volume = btn_mute_or_unmute_volume;
                btn_mute_or_unmute_counter = "mute";
                input_volume.value = btn_mute_or_unmute_volume;
                if (btn_mute_or_unmute_volume > 0.5) {
                    i_for_btn_mute_or_unmute.className = "fa fa-volume-up "
                } else {
                    i_for_btn_mute_or_unmute.className = "fa fa-volume-down"
                }
                if (btn_mute_or_unmute_volume == 0) {
                    i_for_btn_mute_or_unmute.className = "fa fa-volume-off"
                }
            }
        }
        btn_mute_or_unmute_volume = input_volume.value;

        let timer_for_img_btn = null;
        let random_for_list_color_back = null;
        let counter_opacity_img_btn_center = 1;
        let conter_rotate_img_btn = 0;

        function onclick_img_btn_f() {
            function set_rotate_for_img_btn_f() {
                if (btn_ply_or_pause_f() == "ply") {
                    clearInterval(timer_for_img_btn);
                    timer_for_img_btn = setInterval(rotate_img_btn_f, Speed_Rotate_Btn_Center_Click);
                    random_for_list_color_back = Math.random() * list_color_for_background_img_btn.length;
                    random_for_list_color_back = random_for_list_color_back.toFixed(0);
                }

            } set_rotate_for_img_btn_f();
        }
        img_btn_center_video.onclick = function () {
            if (Counter_Img_For_LoadData_and_Set_Btn_onClick == "Click") {
                onclick_img_btn_f();
            }
        }

        function rotate_img_btn_f() {

            img_btn_center_video.style.transform = `rotate(-${conter_rotate_img_btn}deg)`;
            conter_rotate_img_btn += 1;
            img_btn_center_video.style.opacity = counter_opacity_img_btn_center;
            counter_opacity_img_btn_center -= 0.009;

            img_btn_center_video.style.background = list_color_for_background_img_btn[random_for_list_color_back];
            video.pause();
            if (conter_rotate_img_btn > 90) {

                clearInterval(timer_for_img_btn);
                video.play();
                counter_opacity_img_btn_center = 1;
                img_btn_center_video.hidden = true;
                img_btn_center_video.style.transform = "rotate(0deg)";
                img_btn_center_video.style.opacity;
                conter_rotate_img_btn = 0;
                img_btn_center_video.style.opacity = 1;
                img_btn_center_video.style.background = list_color_for_background_img_btn[random_for_list_color_back];
            }
        }


        let Counter_for_Down_and_click_next_Up_or_not = 1;
        let counter_type_onclick_onmousedown_for_scollbar_and_click = null
        let Element_Div_for_full_show_setting = document.getElementsByClassName('div_full_btn_for_setting_level_2_VIdeo_player_fzl ')[couter_create_video_player];
        let D_for_Scroll = { top: 0, left: 0, x: 0, y: 0 };
        let Counter_for_DOWN_OR_UP_SCROLL_FOR_Div_Show = null
        Element_Div_for_full_show_setting.scrollTop = 10;
        let timer_for_fixed_Down_for_scroll_or_click_for_div_Show_Setting = null
        let counter_for_fixed_down_for_scroll_or_click_for_div_Show_Setting = "Click"

        Element_Div_for_full_show_setting.onmousedown = function (e) {

            clearTimeout(timer_for_fixed_Down_for_scroll_or_click_for_div_Show_Setting)
            timer_for_fixed_Down_for_scroll_or_click_for_div_Show_Setting = setTimeout(function () {
                mouseDownHandler(e)
                counter_for_fixed_down_for_scroll_or_click_for_div_Show_Setting = "Scroll"
                Counter_for_Down_and_click_next_Up_or_not = 0
            }, 130)

        }

        Element_Div_for_full_show_setting.addEventListener('mouseup', function (e) {
            clearTimeout(timer_for_fixed_Down_for_scroll_or_click_for_div_Show_Setting)
            Counter_for_DOWN_OR_UP_SCROLL_FOR_Div_Show = "Up"
            if (Counter_for_Down_and_click_next_Up_or_not == 0) {
                setTimeout(function () {
                    counter_for_fixed_down_for_scroll_or_click_for_div_Show_Setting = "Click"

                }, 50)
            }
        });

        function mouseDownHandler(e) {
            Counter_for_DOWN_OR_UP_SCROLL_FOR_Div_Show = "Down"
            D_for_Scroll = {
                top: Element_Div_for_full_show_setting.scrollTop,
                y: e.clientY,
            };

            Element_Div_for_full_show_setting.addEventListener('mousemove', function (e) {
                mouseMoveHandler(e)
            });
        };
        function mouseMoveHandler(e) {
            if (Counter_for_DOWN_OR_UP_SCROLL_FOR_Div_Show == "Down") {
                let Result_Y_Y_Set_Scroll = e.clientY - D_for_Scroll.y;
                Element_Div_for_full_show_setting.scrollTop = D_for_Scroll.top - Result_Y_Y_Set_Scroll;
            } else { }
        }

        div_container_Video.onmouseup = function () {
            clearTimeout(timer_for_fixed_Down_for_scroll_or_click_for_div_Show_Setting)
            Counter_for_DOWN_OR_UP_SCROLL_FOR_Div_Show = "Up"
            if (Counter_for_Down_and_click_next_Up_or_not == 0) {
                setTimeout(function () {
                    counter_for_fixed_down_for_scroll_or_click_for_div_Show_Setting = "Click"

                }, 50)
            }
        }

        let set_timer_for_hide_controls_timeout_f = null;
        let set_timer_for_hide_controls_interval_f = null;

        function ondisabled_btns_controls() {
            btn_mute_or_unmute.disabled = false
            btn_ply_or_pause.disabled = false
            btn_mute_or_unmute.disabled = false
            btn_cog.disabled = false
            input_seek_and_progres_video.disabled = false
            btn_FullScreen.disabled = false
        }
        function disabled_btns_controls() {
            btn_mute_or_unmute.disabled = true
            btn_ply_or_pause.disabled = true
            btn_mute_or_unmute.disabled = true
            btn_cog.disabled = true
            btn_FullScreen.disabled = true
            input_seek_and_progres_video.disabled = true
        }
        let timer_for_ondisabled_btns_controls = null
        let Counter_For_Show_Or_Not_Show_Conrols
        function controls_show_f() {
            if (Counter_For_Show_Or_Not_Show_Conrols == "Show") {
                if (video.getAttribute("Counter_for_Show_or_No_Show_Control_for_Ad") == "Show") {
                    counter_div_full_cog_setting = 8;
                    div_container_Video_controls.style.display = "inline-block"
                    couner_height_hide_controls = ints_counter_height_hide_controls;
                    clearInterval(set_timer_for_hide_controls_interval_f);
                    clearTimeout(set_timer_for_hide_controls_timeout_f);
                    div_container_Video_controls.style.opacity = couner_height_hide_controls;
                    div_container_Video.style.cursor = "default";
                    div_container_Video.style.border = "0.5px solid #999898"
                    clearTimeout(timer_for_ondisabled_btns_controls)
                    timer_for_ondisabled_btns_controls = setTimeout(ondisabled_btns_controls, 20)
                }
            }
        };
        disabled_btns_controls()

        let counter_div_full_cog_setting = 8;
        let Counter_For_Rotate_Img_Btn = 1
        let Timer_For_Rotate_Img_Btn_Load = null
        let Counter_For_Setinterval_for_plus_opacity_or_no_opacity__Loading = "Miunes"

        let Counter_For_OnmouseUp_Input_Seek_To_Load_Video_And_Rotate = "Loading"
        video.onloadstart = function (e) {
            set_fon_size_for_timeduration_and_timecurrent_and_set_widt_height_btn_img_center()
            Counter_For_Hidden_Img_btn_Center_For_Rotate_When_Load = "Load"
            Counter_For_Show_Or_Not_Show_Conrols = "Hide"

            Set_Img_Btn_Center_Rotate_Wait()
        }
        function Timer_For_Rotate_Img_Btn_Load_F() {
            if (Counter_For_OnmouseUp_Input_Seek_To_Load_Video_And_Rotate == "Loading") {
                if (Counter_For_Setinterval_for_plus_opacity_or_no_opacity__Loading == "Miunes") {
                    Counter_For_Rotate_Img_Btn -= .05
                    img_btn_center_video.style.opacity = Counter_For_Rotate_Img_Btn
                    if (Counter_For_Rotate_Img_Btn < 0) {
                        Counter_For_Setinterval_for_plus_opacity_or_no_opacity__Loading = "Plus"
                    }
                } else {
                    Counter_For_Rotate_Img_Btn += 0.05
                    img_btn_center_video.style.opacity = Counter_For_Rotate_Img_Btn
                    if (Counter_For_Rotate_Img_Btn > 1) {
                        Counter_For_Setinterval_for_plus_opacity_or_no_opacity__Loading = "Miunes"
                    }

                }

            }

        }

        video.onloadeddata = function (e) {
            Counter_For_Hidden_Img_btn_Center_For_Rotate_When_Load = "NoLoad"
            Counter_Img_For_LoadData_and_Set_Btn_onClick = "Click"
            Counter_For_Show_Or_Not_Show_Conrols = "Show"
            set_fon_size_for_timeduration_and_timecurrent_and_set_widt_height_btn_img_center()
            current_time_duration_set_darsad()
            set_max_duration_and_timeduration();
            Set_Img_Btn_Center_Rotate_Wait()
        };



        video.addEventListener("pause", function () {
            Counter_For_Play_Vid = "Pause"
            counter_for_oninput_for_play_or_not_play = "not_ply"
            counter_for_quality_change_play_or_not = "pause";
            controls_show_f();
            img_btn_center_video.hidden = false;
            btn_Ply_Or_Pause_Counter = "ply";
            i_for_btn_ply.className = "fa fa-play";
            counter_controls_show_onclick_f = "show"
        });
        video.onplaying = function () {
            Run_Ad()

            Counter_For_Play_Vid = "Ply"
            fixed_mouse_and_hide_div_controls()
            counter_for_oninput_for_play_or_not_play = "ply"
            counter_for_quality_change_play_or_not = "play";
            btn_Ply_Or_Pause_Counter = "pause";
            i_for_btn_ply.className = "fa fa-pause";
            if (Counter_For_Hidden_Img_btn_Center_For_Rotate_When_Load == "NoLoad") {
                img_btn_center_video.hidden = true;
            } else {
                img_btn_center_video.hidden = false;
            }
            counter_controls_show_onclick_f = "hide";
        };

        let State_Current_Time_For_ad_For_Set_Again_After_Ad = "NoAd"
        video.ontimeupdate = function () {
            if (State_Current_Time_For_ad_For_Set_Again_After_Ad == "NoAd") {
                Time_Vid_for_After_Ad = video.currentTime
            }
            Set_Img_Btn_Center_Rotate_Wait()
            set_value_progres_seek()
            set_current_time_video()
        }
        video.addEventListener("contextmenu", function (e) {
            e.preventDefault();
        });
        div_container_Video.addEventListener("contextmenu", function (e) {
            e.preventDefault();
        });

        div_container_Video.onerror = function () {
            return true
        }

        let timer_for_conter_hide_div_video_mouse_fixed = null;
        let conter_hide_div_video_for_mouse_fixed = 0;
        function conter_hide_div_video_for_mouse_fixed_f() {
            if (div_container_Video_controls.onmouseover) {


            } else {
                conter_hide_div_video_for_mouse_fixed += 1;
                if (conter_hide_div_video_for_mouse_fixed > counter_div_full_cog_setting) {
                    hide_div_video_mouse_fixed();
                    clearInterval(timer_for_conter_hide_div_video_mouse_fixed)
                }
            }
        }
        function hide_div_video_mouse_fixed() {
            if (Counter_For_Play_Vid == "Ply") {
                clearInterval(set_timer_for_hide_controls_interval_f);
                set_timer_for_hide_controls_interval_f = setInterval(hide_controls_int_f, 10)
            }
        }

        let counter_for_mousemove_oreexitornot = "hide";
        function fixed_mouse_and_hide_div_controls() {
            if (counter_for_mousemove_oreexitornot == "show") {
                conter_hide_div_video_for_mouse_fixed = 0;
                controls_show_f();
                counter_for_mousemove_oreexitornot = "hide";
            } else {

                counter_for_mousemove_oreexitornot = "show";
                clearInterval(timer_for_conter_hide_div_video_mouse_fixed);
                timer_for_conter_hide_div_video_mouse_fixed = setInterval(conter_hide_div_video_for_mouse_fixed_f, Speed_Fade_Control)
            }
        }

        div_container_Video.onmousemove = function () {
            fixed_mouse_and_hide_div_controls();
        };
        div_container_Video.ontouchstart = function () {
            conter_hide_div_video_for_mouse_fixed = 0
        };
        div_container_Video.ontouchend = function () {
            conter_hide_div_video_for_mouse_fixed = 0
            fixed_mouse_and_hide_div_controls();
        };
        div_container_Video.onmouseover = function () {
            conter_hide_div_video_for_mouse_fixed = 0;
        };
        function hide_div_for_btn_cog_VIdeo_player_fzl_setting() {
            btn_cog_close()
            div_for_btn_cog_VIdeo_player_fzl_for_show_setting.style.display = "none";
            div_for_btn_cog_VIdeo_player_fzl_for_show_setting.style.width = 0;
            counter_btn_cog_open_close = "open";
            counter_height_div_for_setting_bnt_cog = 0;
        }
        function hide_controls_int_f() {
            if (video.getAttribute("Counter_for_Show_or_No_Show_Control_for_Ad") == "Show") {
                div_container_Video_controls.style.opacity = couner_height_hide_controls;
                couner_height_hide_controls -= 0.040;
                hide_div_for_btn_cog_VIdeo_player_fzl_setting();
                if (couner_height_hide_controls < 0) {
                    disabled_btns_controls()
                    input_volume.style.width = 0
                    input_volume.style.display = "none"
                    div_container_Video.style.border = "none"
                    div_container_Video_controls.style.display = "none";
                    div_container_Video.style.cursor = "none";
                    couner_height_hide_controls = 1;
                    clearInterval(set_timer_for_hide_controls_interval_f)
                }
            }
        }
        div_full_btn_sub_theme_quality.onscroll = function () {
            Set_Fade_Out_For_Div_Show_Setting(div_full_btn_sub_theme_quality)
        }
        function Set_Fade_Out_For_Div_Show_Setting(div_Show_Setting) {


            if (div_Show_Setting.scrollHeight <= div_Show_Setting.clientHeight + 10) {
                div_Show_Setting.className = "div_full_btn_for_setting_level_2_VIdeo_player_fzl "

            } else {
                if (div_Show_Setting.scrollTop + 5 > (div_Show_Setting.scrollHeight - div_Show_Setting.clientHeight)) {

                    div_Show_Setting.className = "div_full_btn_for_setting_level_2_VIdeo_player_fzl div_full_btn_for_setting_level_2_VIdeo_player_fzl_fade_out_text_top"

                } else {

                    div_Show_Setting.className = "div_full_btn_for_setting_level_2_VIdeo_player_fzl div_full_btn_for_setting_level_2_VIdeo_player_fzl_fade_out_text_bottom"
                }
            }

        }

        function SET_WIDTH_HEIGHT_DIV_SHOW_SETTING() {

            let VIDEO_PLYER_fzl_RESP = document.getElementsByClassName("video_player_fzl")
            let __Div_Container_RESP = null
            let __Right_Container_RESP = null
            for (let fff = 0; fff < document.getElementsByClassName("container_video").length; fff++) {

                __Div_Container_RESP = document.getElementsByClassName("container_video")[fff]
                let Show_Current_Time_For_Input_Seek = __Div_Container_RESP.getElementsByClassName("Show_Time_Curent_Input_Seek")[0]
                let Div_Container_Controls_RESP_fa = __Div_Container_RESP.getElementsByClassName("Cnt_Vid_controls")[0].getElementsByClassName("fa")
                let Div_Time_Video = __Div_Container_RESP.getElementsByClassName("div_progress_and_Time")[0]
                let Input_Volune_RESP = __Div_Container_RESP.getElementsByClassName("input_volume")[0]
                let Input_Seek_Progress = __Div_Container_RESP.getElementsByClassName("period_progres")[0]
                let Input_Seek_Progress_BackGround_Seeked = __Div_Container_RESP.getElementsByClassName("background_input")[0]
                let Btn_Cog = __Div_Container_RESP.getElementsByClassName("btn_cog")[0]
                let Div_Mute_Vol = __Div_Container_RESP.getElementsByClassName("Div_Btn_Mute_Input_Volume")[0]

                Set_Fade_Out_For_Div_Show_Setting(__Div_Container_RESP.getElementsByClassName("div_full_btn_for_setting_level_2_VIdeo_player_fzl")[0])
                __Div_Container_RESP.getElementsByClassName("btn_center_img")[0].style.display = "inline-block"

                for (let ccc = 0; ccc < __Div_Container_RESP.getElementsByClassName("classes_for_btns_level_1_for_VIdeo_player_fzl").length; ccc++) {
                    if (__Div_Container_RESP.clientWidth < 100) {

                        Btn_Cog.style.display = "none"
                        Div_Mute_Vol.style.display = "none"
                        Show_Current_Time_For_Input_Seek.style.fontSize = "4px"
                        Show_Current_Time_For_Input_Seek.style.width = "6px"
                        Show_Current_Time_For_Input_Seek.style.width = "3px"
                        Input_Volune_RESP.setAttribute("Width_Input", 7)
                        __Div_Container_RESP.getElementsByClassName("div_for_btn_cog_VIdeo_player_fzl")[0].style.fontSize = "3px"
                        __Div_Container_RESP.getElementsByClassName("div_full_btn_for_setting_level_2_VIdeo_player_fzl")[0].style.width = VIDEO_PLYER_fzl_RESP[fff].clientWidth / 5
                        __Div_Container_RESP.getElementsByClassName("div_full_btn_for_setting_level_2_VIdeo_player_fzl")[0].style.fontSize = "5px"
                        SET_WIDTH_DIV_FOR_SHOW_SETTING = VIDEO_PLYER_fzl_RESP[fff].clientWidth / 5
                        BORDER_WIDTH_BTN_LEVEL1_SETTING = ".05vw"
                        __Right_Container_RESP = VIDEO_PLYER_fzl_RESP[fff].clientWidth / 5
                        Div_Container_Controls_RESP_fa[0].style.fontSize = "6px"
                        Div_Container_Controls_RESP_fa[1].style.fontSize = "6px"
                        Div_Container_Controls_RESP_fa[2].style.fontSize = "6px"
                        Div_Container_Controls_RESP_fa[3].style.fontSize = "6px"
                        Div_Container_Controls_RESP_fa[0].style.padding = "2px"
                        Div_Container_Controls_RESP_fa[1].style.padding = "2px"
                        Div_Container_Controls_RESP_fa[2].style.padding = "2px"
                        Div_Container_Controls_RESP_fa[3].style.padding = "2px"
                        Div_Time_Video.style.fontSize = "3px"

                    } else if (__Div_Container_RESP.clientWidth > 100 && __Div_Container_RESP.clientWidth < 200) {
                        Btn_Cog.style.display = "inline-block"
                        Div_Mute_Vol.style.display = "inline-block"
                        Show_Current_Time_For_Input_Seek.style.fontSize = "6px"
                        Show_Current_Time_For_Input_Seek.style.width = "8px"
                        Show_Current_Time_For_Input_Seek.style.height = "4px"
                        Input_Volune_RESP.setAttribute("Width_Input", 20)
                        BORDER_WIDTH_BTN_LEVEL1_SETTING = ".07vw"
                        __Div_Container_RESP.getElementsByClassName("div_for_btn_cog_VIdeo_player_fzl")[0].style.fontSize = "6px"
                        __Div_Container_RESP.getElementsByClassName("div_full_btn_for_setting_level_2_VIdeo_player_fzl")[0].style.width = VIDEO_PLYER_fzl_RESP[fff].clientWidth / 6
                        __Div_Container_RESP.getElementsByClassName("div_full_btn_for_setting_level_2_VIdeo_player_fzl")[0].style.fontSize = "6px"
                        SET_WIDTH_DIV_FOR_SHOW_SETTING = VIDEO_PLYER_fzl_RESP[fff].clientWidth / 5
                        __Right_Container_RESP = VIDEO_PLYER_fzl_RESP[fff].clientWidth / 9
                        Div_Container_Controls_RESP_fa[0].style.fontSize = "8px"
                        Div_Container_Controls_RESP_fa[1].style.fontSize = "5px"
                        Div_Container_Controls_RESP_fa[2].style.fontSize = "8px"
                        Div_Container_Controls_RESP_fa[3].style.fontSize = "5px"
                        Div_Container_Controls_RESP_fa[0].style.padding = "3px"
                        Div_Container_Controls_RESP_fa[1].style.padding = "3px"
                        Div_Container_Controls_RESP_fa[2].style.padding = "3px"
                        Div_Container_Controls_RESP_fa[3].style.padding = "3px"
                        Div_Time_Video.style.fontSize = "5px"

                    } else if (__Div_Container_RESP.clientWidth > 200 && __Div_Container_RESP.clientWidth < 300) {
                        Btn_Cog.style.display = "inline-block"
                        Div_Mute_Vol.style.display = "inline-block"
                        Show_Current_Time_For_Input_Seek.style.fontSize = "6.5px"
                        Show_Current_Time_For_Input_Seek.style.width = "18px"
                        Show_Current_Time_For_Input_Seek.style.height = "9px"
                        Input_Volune_RESP.setAttribute("Width_Input", 50)
                        BORDER_WIDTH_BTN_LEVEL1_SETTING = ".1vw"
                        __Div_Container_RESP.getElementsByClassName("div_for_btn_cog_VIdeo_player_fzl")[0].style.fontSize = "7.5px"
                        __Div_Container_RESP.getElementsByClassName("div_full_btn_for_setting_level_2_VIdeo_player_fzl")[0].style.width = VIDEO_PLYER_fzl_RESP[fff].clientWidth / 5.5
                        __Div_Container_RESP.getElementsByClassName("div_full_btn_for_setting_level_2_VIdeo_player_fzl")[0].style.fontSize = "7.5px"
                        SET_WIDTH_DIV_FOR_SHOW_SETTING = VIDEO_PLYER_fzl_RESP[fff].clientWidth / 4.5
                        __Right_Container_RESP = VIDEO_PLYER_fzl_RESP[fff].clientWidth / 17
                        Div_Container_Controls_RESP_fa[0].style.fontSize = "11px"
                        Div_Container_Controls_RESP_fa[1].style.fontSize = "10px"
                        Div_Container_Controls_RESP_fa[2].style.fontSize = "11px"
                        Div_Container_Controls_RESP_fa[3].style.fontSize = "10px"
                        Div_Container_Controls_RESP_fa[0].style.padding = "3.5px"
                        Div_Container_Controls_RESP_fa[1].style.padding = "3.5px"
                        Div_Container_Controls_RESP_fa[2].style.padding = "3.5px"
                        Div_Container_Controls_RESP_fa[3].style.padding = "3.5px"
                        Div_Time_Video.style.fontSize = "7px"
                    } else if (__Div_Container_RESP.clientWidth > 300 && __Div_Container_RESP.clientWidth < 400) {

                        Btn_Cog.style.display = "inline-block"
                        Div_Mute_Vol.style.display = "inline-block"
                        Show_Current_Time_For_Input_Seek.style.fontSize = "7px"
                        Show_Current_Time_For_Input_Seek.style.width = "20px"
                        Show_Current_Time_For_Input_Seek.style.height = "10px"
                        Input_Volune_RESP.setAttribute("Width_Input", 60)
                        BORDER_WIDTH_BTN_LEVEL1_SETTING = ".13vw"
                        __Div_Container_RESP.getElementsByClassName("div_for_btn_cog_VIdeo_player_fzl")[0].style.fontSize = "8.5px"
                        __Div_Container_RESP.getElementsByClassName("div_full_btn_for_setting_level_2_VIdeo_player_fzl")[0].style.width = VIDEO_PLYER_fzl_RESP[fff].clientWidth / 4
                        __Div_Container_RESP.getElementsByClassName("div_full_btn_for_setting_level_2_VIdeo_player_fzl")[0].style.fontSize = "8.5px"
                        SET_WIDTH_DIV_FOR_SHOW_SETTING = VIDEO_PLYER_fzl_RESP[fff].clientWidth / 4
                        __Right_Container_RESP = VIDEO_PLYER_fzl_RESP[fff].clientWidth / 25
                        Div_Container_Controls_RESP_fa[0].style.fontSize = "16.5px"
                        Div_Container_Controls_RESP_fa[1].style.fontSize = "12px"
                        Div_Container_Controls_RESP_fa[2].style.fontSize = "16.5px"
                        Div_Container_Controls_RESP_fa[3].style.fontSize = "12px"
                        Div_Container_Controls_RESP_fa[0].style.padding = "5px"
                        Div_Container_Controls_RESP_fa[1].style.padding = "5px"
                        Div_Container_Controls_RESP_fa[2].style.padding = "5px"
                        Div_Container_Controls_RESP_fa[3].style.padding = "5px"
                        Div_Time_Video.style.fontSize = "11px"

                    } else if (__Div_Container_RESP.clientWidth > 400 && __Div_Container_RESP.clientWidth < 500) {
                        Btn_Cog.style.display = "inline-block"
                        Div_Mute_Vol.style.display = "inline-block"
                        Show_Current_Time_For_Input_Seek.style.fontSize = "7.5px"
                        Show_Current_Time_For_Input_Seek.style.width = "30px"
                        Show_Current_Time_For_Input_Seek.style.height = "15px"
                        Input_Volune_RESP.setAttribute("Width_Input", 65)
                        BORDER_WIDTH_BTN_LEVEL1_SETTING = ".18vw"
                        __Div_Container_RESP.getElementsByClassName("div_for_btn_cog_VIdeo_player_fzl")[0].style.fontSize = "10.5px"
                        __Div_Container_RESP.getElementsByClassName("div_full_btn_for_setting_level_2_VIdeo_player_fzl")[0].style.width = VIDEO_PLYER_fzl_RESP[fff].clientWidth / 4
                        __Div_Container_RESP.getElementsByClassName("div_full_btn_for_setting_level_2_VIdeo_player_fzl")[0].style.fontSize = "10.5px"
                        SET_WIDTH_DIV_FOR_SHOW_SETTING = VIDEO_PLYER_fzl_RESP[fff].clientWidth / 4
                        __Right_Container_RESP = VIDEO_PLYER_fzl_RESP[fff].clientWidth / 52
                        Div_Container_Controls_RESP_fa[0].style.fontSize = "16.5px"
                        Div_Container_Controls_RESP_fa[1].style.fontSize = "12px"
                        Div_Container_Controls_RESP_fa[2].style.fontSize = "16.5px"
                        Div_Container_Controls_RESP_fa[3].style.fontSize = "12px"
                        Div_Container_Controls_RESP_fa[0].style.padding = "6.5px"
                        Div_Container_Controls_RESP_fa[1].style.padding = "6.5px"
                        Div_Container_Controls_RESP_fa[2].style.padding = "6.5px"
                        Div_Container_Controls_RESP_fa[3].style.padding = "6.5px"
                        Div_Time_Video.style.fontSize = "13px"

                    } else if (__Div_Container_RESP.clientWidth > 500 && __Div_Container_RESP.clientWidth < 700) {

                        Btn_Cog.style.display = "inline-block"
                        Div_Mute_Vol.style.display = "inline-block"
                        Show_Current_Time_For_Input_Seek.style.fontSize = "7.5px"
                        Show_Current_Time_For_Input_Seek.style.width = "33px"
                        Show_Current_Time_For_Input_Seek.style.height = "16.5px"
                        Input_Volune_RESP.setAttribute("Width_Input", 70)
                        BORDER_WIDTH_BTN_LEVEL1_SETTING = ".23vw"
                        __Div_Container_RESP.getElementsByClassName("div_for_btn_cog_VIdeo_player_fzl")[0].style.fontSize = "12px"
                        __Div_Container_RESP.getElementsByClassName("div_full_btn_for_setting_level_2_VIdeo_player_fzl")[0].style.width = VIDEO_PLYER_fzl_RESP[fff].clientWidth / 4
                        __Div_Container_RESP.getElementsByClassName("div_full_btn_for_setting_level_2_VIdeo_player_fzl")[0].style.fontSize = "12px"
                        SET_WIDTH_DIV_FOR_SHOW_SETTING = VIDEO_PLYER_fzl_RESP[fff].clientWidth / 4
                        __Right_Container_RESP = VIDEO_PLYER_fzl_RESP[fff].clientWidth / 53
                        Div_Container_Controls_RESP_fa[0].style.fontSize = "17px"
                        Div_Container_Controls_RESP_fa[1].style.fontSize = "14px"
                        Div_Container_Controls_RESP_fa[2].style.fontSize = "17px"
                        Div_Container_Controls_RESP_fa[3].style.fontSize = "14px"
                        Div_Container_Controls_RESP_fa[0].style.padding = "8px"
                        Div_Container_Controls_RESP_fa[1].style.padding = "8px"
                        Div_Container_Controls_RESP_fa[2].style.padding = "8px"
                        Div_Container_Controls_RESP_fa[3].style.padding = "8px"
                        Div_Time_Video.style.fontSize = "15px"

                    } else if (__Div_Container_RESP.clientWidth > 700 && __Div_Container_RESP.clientWidth < 900) {

                        Btn_Cog.style.display = "inline-block"
                        Div_Mute_Vol.style.display = "inline-block"
                        Show_Current_Time_For_Input_Seek.style.fontSize = "8px"
                        Show_Current_Time_For_Input_Seek.style.width = "46px"
                        Show_Current_Time_For_Input_Seek.style.height = "23px"
                        Input_Volune_RESP.setAttribute("Width_Input", 70)
                        BORDER_WIDTH_BTN_LEVEL1_SETTING = ".23vw"
                        __Div_Container_RESP.getElementsByClassName("div_for_btn_cog_VIdeo_player_fzl")[0].style.fontSize = "14px"
                        __Div_Container_RESP.getElementsByClassName("div_full_btn_for_setting_level_2_VIdeo_player_fzl")[0].style.width = VIDEO_PLYER_fzl_RESP[fff].clientWidth / 4
                        __Div_Container_RESP.getElementsByClassName("div_full_btn_for_setting_level_2_VIdeo_player_fzl")[0].style.fontSize = "14px"
                        SET_WIDTH_DIV_FOR_SHOW_SETTING = VIDEO_PLYER_fzl_RESP[fff].clientWidth / 4
                        __Right_Container_RESP = VIDEO_PLYER_fzl_RESP[fff].clientWidth / 53
                        Div_Container_Controls_RESP_fa[0].style.fontSize = "17px"
                        Div_Container_Controls_RESP_fa[1].style.fontSize = "14px"
                        Div_Container_Controls_RESP_fa[2].style.fontSize = "17px"
                        Div_Container_Controls_RESP_fa[3].style.fontSize = "14px"
                        Div_Container_Controls_RESP_fa[0].style.padding = "8px"
                        Div_Container_Controls_RESP_fa[1].style.padding = "8px"
                        Div_Container_Controls_RESP_fa[2].style.padding = "8px"
                        Div_Container_Controls_RESP_fa[3].style.padding = "8px"
                        Div_Time_Video.style.fontSize = "17px"

                    } else if (__Div_Container_RESP.clientWidth > 900 && __Div_Container_RESP.clientWidth < 1300) {

                        Btn_Cog.style.display = "inline-block"
                        Div_Mute_Vol.style.display = "inline-block"
                        Show_Current_Time_For_Input_Seek.style.fontSize = "8.5px"
                        Show_Current_Time_For_Input_Seek.style.width = "46px"
                        Show_Current_Time_For_Input_Seek.style.height = "23px"
                        Input_Volune_RESP.setAttribute("Width_Input", 70)
                        BORDER_WIDTH_BTN_LEVEL1_SETTING = ".25vw"
                        __Div_Container_RESP.getElementsByClassName("div_for_btn_cog_VIdeo_player_fzl")[0].style.fontSize = "18px"
                        __Div_Container_RESP.getElementsByClassName("div_full_btn_for_setting_level_2_VIdeo_player_fzl")[0].style.width = VIDEO_PLYER_fzl_RESP[fff].clientWidth / 4
                        __Div_Container_RESP.getElementsByClassName("div_full_btn_for_setting_level_2_VIdeo_player_fzl")[0].style.fontSize = "18px"
                        SET_WIDTH_DIV_FOR_SHOW_SETTING = VIDEO_PLYER_fzl_RESP[fff].clientWidth / 4
                        __Right_Container_RESP = VIDEO_PLYER_fzl_RESP[fff].clientWidth / 54
                        Div_Container_Controls_RESP_fa[0].style.fontSize = "18px"
                        Div_Container_Controls_RESP_fa[1].style.fontSize = "15px"
                        Div_Container_Controls_RESP_fa[2].style.fontSize = "18px"
                        Div_Container_Controls_RESP_fa[3].style.fontSize = "15px"
                        Div_Container_Controls_RESP_fa[0].style.padding = "8px"
                        Div_Container_Controls_RESP_fa[1].style.padding = "8px"
                        Div_Container_Controls_RESP_fa[2].style.padding = "8px"
                        Div_Container_Controls_RESP_fa[3].style.padding = "8px"
                        Div_Time_Video.style.fontSize = "17px"

                    } else if (__Div_Container_RESP.clientWidth > 1300 && __Div_Container_RESP.clientWidth < 1600) {

                        Btn_Cog.style.display = "inline-block"
                        Div_Mute_Vol.style.display = "inline-block"
                        Show_Current_Time_For_Input_Seek.style.fontSize = "8.5px"
                        Show_Current_Time_For_Input_Seek.style.width = "46px"
                        Show_Current_Time_For_Input_Seek.style.height = "23px"
                        Input_Volune_RESP.setAttribute("Width_Input", 75)
                        BORDER_WIDTH_BTN_LEVEL1_SETTING = ".25vw"
                        __Div_Container_RESP.getElementsByClassName("div_for_btn_cog_VIdeo_player_fzl")[0].style.fontSize = "18px"
                        __Div_Container_RESP.getElementsByClassName("div_full_btn_for_setting_level_2_VIdeo_player_fzl")[0].style.width = VIDEO_PLYER_fzl_RESP[fff].clientWidth / 4
                        __Div_Container_RESP.getElementsByClassName("div_full_btn_for_setting_level_2_VIdeo_player_fzl")[0].style.fontSize = "18px"
                        SET_WIDTH_DIV_FOR_SHOW_SETTING = VIDEO_PLYER_fzl_RESP[fff].clientWidth / 4
                        __Right_Container_RESP = VIDEO_PLYER_fzl_RESP[fff].clientWidth / 54
                        Div_Container_Controls_RESP_fa[0].style.fontSize = "20px"
                        Div_Container_Controls_RESP_fa[1].style.fontSize = "17px"
                        Div_Container_Controls_RESP_fa[2].style.fontSize = "20px"
                        Div_Container_Controls_RESP_fa[3].style.fontSize = "17px"
                        Div_Container_Controls_RESP_fa[0].style.padding = "9px"
                        Div_Container_Controls_RESP_fa[1].style.padding = "9px"
                        Div_Container_Controls_RESP_fa[2].style.padding = "9px"
                        Div_Container_Controls_RESP_fa[3].style.padding = "9px"
                        Div_Time_Video.style.fontSize = "18px"

                    } else if (__Div_Container_RESP.clientWidth > 1600) {

                        Btn_Cog.style.display = "inline-block"
                        Div_Mute_Vol.style.display = "inline-block"
                        Show_Current_Time_For_Input_Seek.style.fontSize = "10px"
                        Show_Current_Time_For_Input_Seek.style.width = "46px"
                        Show_Current_Time_For_Input_Seek.style.height = "23px"
                        Input_Volune_RESP.setAttribute("Width_Input", 75)
                        BORDER_WIDTH_BTN_LEVEL1_SETTING = ".27vw"
                        __Div_Container_RESP.getElementsByClassName("div_for_btn_cog_VIdeo_player_fzl")[0].style.fontSize = "16px"
                        __Div_Container_RESP.getElementsByClassName("div_full_btn_for_setting_level_2_VIdeo_player_fzl")[0].style.width = VIDEO_PLYER_fzl_RESP[fff].clientWidth / 5
                        __Div_Container_RESP.getElementsByClassName("div_full_btn_for_setting_level_2_VIdeo_player_fzl")[0].style.fontSize = "14.5px"
                        SET_WIDTH_DIV_FOR_SHOW_SETTING = VIDEO_PLYER_fzl_RESP[fff].clientWidth / 3.5
                        __Right_Container_RESP = VIDEO_PLYER_fzl_RESP[fff].clientWidth / 54
                        Div_Container_Controls_RESP_fa[0].style.fontSize = "22px"
                        Div_Container_Controls_RESP_fa[1].style.fontSize = "20px"
                        Div_Container_Controls_RESP_fa[2].style.fontSize = "22px"
                        Div_Container_Controls_RESP_fa[3].style.fontSize = "19px"
                        Div_Container_Controls_RESP_fa[0].style.padding = "9px"
                        Div_Container_Controls_RESP_fa[1].style.padding = "9px"
                        Div_Container_Controls_RESP_fa[2].style.padding = "9px"
                        Div_Container_Controls_RESP_fa[3].style.padding = "9px"
                        Div_Time_Video.style.fontSize = "18px"

                    }


                    if (__Div_Container_RESP.clientHeight < 50) {
                        Input_Seek_Progress_BackGround_Seeked.style.height = "1.5px"
                        Input_Seek_Progress_BackGround_Seeked.style.marginTop = "-1.5px"
                        Input_Seek_Progress.style.height = "1.5px"
                        __Div_Container_RESP.getElementsByClassName("classes_for_btns_level_1_for_VIdeo_player_fzl")[ccc].style.height = "4px"
                        __Div_Container_RESP.getElementsByClassName("btn_level2_quality_div")[0].style.height = "15px"
                        __Div_Container_RESP.getElementsByClassName("div_subtitles")[0].style.height = "15px"
                        __Div_Container_RESP.getElementsByClassName("div_speed")[0].style.height = "15px"
                        Input_Volune_RESP.style.height = "3px"
                    }
                    else if (__Div_Container_RESP.clientHeight < 100 && __Div_Container_RESP.clientHeight > 49) {

                        Input_Seek_Progress_BackGround_Seeked.style.height = "1.5px"
                        Input_Seek_Progress_BackGround_Seeked.style.marginTop = "-1.5px"
                        Input_Seek_Progress.style.height = "1.5px"
                        __Div_Container_RESP.getElementsByClassName("classes_for_btns_level_1_for_VIdeo_player_fzl")[ccc].style.height = "7px"
                        __Div_Container_RESP.getElementsByClassName("btn_level2_quality_div")[0].style.height = "30px"
                        __Div_Container_RESP.getElementsByClassName("div_subtitles")[0].style.height = "30px"
                        __Div_Container_RESP.getElementsByClassName("div_speed")[0].style.height = "30px"
                        Input_Volune_RESP.style.height = "3px"

                    } else if (__Div_Container_RESP.clientHeight > 99 && __Div_Container_RESP.clientHeight < 200) {
                        Input_Seek_Progress_BackGround_Seeked.style.height = "2px"
                        Input_Seek_Progress_BackGround_Seeked.style.marginTop = "-2px"
                        Input_Seek_Progress.style.height = "2px"
                        __Div_Container_RESP.getElementsByClassName("classes_for_btns_level_1_for_VIdeo_player_fzl")[ccc].style.height = "14px"
                        __Div_Container_RESP.getElementsByClassName("btn_level2_quality_div")[0].style.height = "50px"
                        __Div_Container_RESP.getElementsByClassName("div_subtitles")[0].style.height = "50px"
                        __Div_Container_RESP.getElementsByClassName("div_speed")[0].style.height = "50px"
                        Input_Volune_RESP.style.height = "3.5px"

                    } else if (__Div_Container_RESP.clientHeight > 199 && __Div_Container_RESP.clientHeight < 300) {

                        Input_Seek_Progress_BackGround_Seeked.style.height = "2px"
                        Input_Seek_Progress_BackGround_Seeked.style.marginTop = "-2px"
                        Input_Seek_Progress.style.height = "2px"
                        __Div_Container_RESP.getElementsByClassName("classes_for_btns_level_1_for_VIdeo_player_fzl")[ccc].style.height = "25px"
                        __Div_Container_RESP.getElementsByClassName("btn_level2_quality_div")[0].style.height = "90px"
                        __Div_Container_RESP.getElementsByClassName("div_subtitles")[0].style.height = "90px"
                        __Div_Container_RESP.getElementsByClassName("div_speed")[0].style.height = "90px"
                        Input_Volune_RESP.style.height = "4px"


                    } else if (__Div_Container_RESP.clientHeight > 299 && __Div_Container_RESP.clientHeight < 400) {

                        Input_Seek_Progress_BackGround_Seeked.style.height = "3px"
                        Input_Seek_Progress_BackGround_Seeked.style.marginTop = "-3px"
                        Input_Seek_Progress.style.height = "3px"
                        __Div_Container_RESP.getElementsByClassName("classes_for_btns_level_1_for_VIdeo_player_fzl")[ccc].style.height = "45px"
                        __Div_Container_RESP.getElementsByClassName("btn_level2_quality_div")[0].style.height = "110px"
                        __Div_Container_RESP.getElementsByClassName("div_subtitles")[0].style.height = "110px"
                        __Div_Container_RESP.getElementsByClassName("div_speed")[0].style.height = "110px"
                        Input_Volune_RESP.style.height = "4px"

                    } else if (__Div_Container_RESP.clientHeight > 399 && __Div_Container_RESP.clientHeight < 500) {

                        Input_Seek_Progress_BackGround_Seeked.style.height = "3px"
                        Input_Seek_Progress_BackGround_Seeked.style.marginTop = "-3px"
                        Input_Seek_Progress.style.height = "3px"
                        __Div_Container_RESP.getElementsByClassName("classes_for_btns_level_1_for_VIdeo_player_fzl")[ccc].style.height = "60px"
                        __Div_Container_RESP.getElementsByClassName("btn_level2_quality_div")[0].style.height = "160px"
                        __Div_Container_RESP.getElementsByClassName("div_subtitles")[0].style.height = "160px"
                        __Div_Container_RESP.getElementsByClassName("div_speed")[0].style.height = "160px"
                        Input_Volune_RESP.style.height = "4.5px"
                    } else if (__Div_Container_RESP.clientHeight > 499 && __Div_Container_RESP.clientHeight < 700) {

                        Input_Seek_Progress_BackGround_Seeked.style.height = "3px"
                        Input_Seek_Progress_BackGround_Seeked.style.marginTop = "-3px"
                        Input_Seek_Progress.style.height = "3px"
                        __Div_Container_RESP.getElementsByClassName("classes_for_btns_level_1_for_VIdeo_player_fzl")[ccc].style.height = "65px"
                        __Div_Container_RESP.getElementsByClassName("btn_level2_quality_div")[0].style.height = "190px"
                        __Div_Container_RESP.getElementsByClassName("div_subtitles")[0].style.height = "190px"
                        __Div_Container_RESP.getElementsByClassName("div_speed")[0].style.height = "190px"
                        Input_Volune_RESP.style.height = "4.5px"

                    } else if (__Div_Container_RESP.clientHeight > 699 && __Div_Container_RESP.clientHeight < 900) {

                        Input_Seek_Progress_BackGround_Seeked.style.height = "4px"
                        Input_Seek_Progress_BackGround_Seeked.style.marginTop = "-4px"
                        Input_Seek_Progress.style.height = "4px"
                        __Div_Container_RESP.getElementsByClassName("classes_for_btns_level_1_for_VIdeo_player_fzl")[ccc].style.height = "65px"
                        __Div_Container_RESP.getElementsByClassName("btn_level2_quality_div")[0].style.height = "200px"
                        __Div_Container_RESP.getElementsByClassName("div_subtitles")[0].style.height = "200px"
                        __Div_Container_RESP.getElementsByClassName("div_speed")[0].style.height = "200px"
                        Input_Volune_RESP.style.height = "5px"

                    } else if (__Div_Container_RESP.clientHeight > 899 && __Div_Container_RESP.clientHeight < 1300) {

                        Input_Seek_Progress_BackGround_Seeked.style.height = "4px"
                        Input_Seek_Progress_BackGround_Seeked.style.marginTop = "-4px"
                        Input_Seek_Progress.style.height = "4px"
                        __Div_Container_RESP.getElementsByClassName("classes_for_btns_level_1_for_VIdeo_player_fzl")[ccc].style.height = "65px"
                        __Div_Container_RESP.getElementsByClassName("btn_level2_quality_div")[0].style.height = "200px"
                        __Div_Container_RESP.getElementsByClassName("div_subtitles")[0].style.height = "200px"
                        __Div_Container_RESP.getElementsByClassName("div_speed")[0].style.height = "200px"
                        Input_Volune_RESP.style.height = "5px"

                    } else if (__Div_Container_RESP.clientHeight > 1299 && __Div_Container_RESP.clientHeight < 1600) {
                        Input_Seek_Progress_BackGround_Seeked.style.height = "5px"
                        Input_Seek_Progress_BackGround_Seeked.style.marginTop = "-5px"
                        Input_Seek_Progress.style.height = "5px"
                        __Div_Container_RESP.getElementsByClassName("classes_for_btns_level_1_for_VIdeo_player_fzl")[ccc].style.height = "70px"
                        __Div_Container_RESP.getElementsByClassName("btn_level2_quality_div")[0].style.height = "250px"
                        __Div_Container_RESP.getElementsByClassName("div_subtitles")[0].style.height = "250px"
                        __Div_Container_RESP.getElementsByClassName("div_speed")[0].style.height = "250px"
                        Input_Volune_RESP.style.height = "5px"

                    } else if (__Div_Container_RESP.clientHeight > 1599) {


                        Input_Seek_Progress_BackGround_Seeked.style.height = "5px"
                        Input_Seek_Progress_BackGround_Seeked.style.marginTop = "-5px"
                        Input_Seek_Progress.style.height = "5px"
                        __Div_Container_RESP.getElementsByClassName("classes_for_btns_level_1_for_VIdeo_player_fzl")[ccc].style.height = "65px"
                        __Div_Container_RESP.getElementsByClassName("btn_level2_quality_div")[0].style.height = "300px"
                        __Div_Container_RESP.getElementsByClassName("div_subtitles")[0].style.height = "300px"
                        __Div_Container_RESP.getElementsByClassName("div_speed")[0].style.height = "300px"
                        Input_Volune_RESP.style.height = "5px"

                    }
                }
                let Show_Current_Time_For_Input_Seek_Height_RESP = Show_Current_Time_For_Input_Seek.style.height
                Show_Current_Time_For_Input_Seek_Height_RESP = Show_Current_Time_For_Input_Seek_Height_RESP.split("px")[0]
                Show_Current_Time_For_Input_Seek_Height_RESP = Input_Seek_Progress.clientHeight - Show_Current_Time_For_Input_Seek_Height_RESP + 15
                Show_Current_Time_For_Input_Seek.style.bottom = Show_Current_Time_For_Input_Seek_Height_RESP
                try {
                    __Div_Container_RESP.getElementsByClassName("div_for_btn_cog_VIdeo_player_fzl")[0].style.width = SET_WIDTH_DIV_FOR_SHOW_SETTING
                    __Div_Container_RESP.getElementsByClassName("div_for_btn_cog_VIdeo_player_fzl")[0].style.right = __Right_Container_RESP
                    __Div_Container_RESP.getElementsByClassName("div_for_btn_cog_VIdeo_player_fzl")[0].setAttribute("Width_Div_for_Btn_Cog_VIdeo", SET_WIDTH_DIV_FOR_SHOW_SETTING)
                } catch (e) { }
            }
        }


        function responsive() {
            SET_WIDTH_HEIGHT_DIV_SHOW_SETTING()
            set_Right_bottom_div_full_btn_for_setting_level2(instance_e_for_RESP_div_Show_cog)
        }



        let Timer_Set_Theme = null
        function set_theme(e) {
            Counter_Theme_Change_ = "Change"
            if (e.target.color == "dark") {
                _Theme_ = "dark"
                COLOR_SELECT_BTNS_COG = {
                    background: "#1b1e21",
                    color: "mediumspringgreen",
                    border: ""
                }
                if (Counter_Change_Theme_Speed == 1) {
                    set_bg_col_Speed(e_ghabli_Speed_Theme)
                }
                if (Counter_Change_Theme_Quality == 1) {
                    set_bg_col_Quality(e_ghabli_Quality_Theme)
                }
                if (Counter_Change_Theme_Sub == 1) {
                    set_bg_col_Sub(e_ghabli_Sub_Theme)
                }
                for (let l = 0; l < div_container_Video.getElementsByClassName("btn_quality_level_2").length; l++) {
                    div_container_Video.getElementsByClassName("btn_quality_level_2")[l].className = ` btn_quality_level_2 Theme_Qu_level_2_${_Theme_} `;
                }
                for (let y = 0; y < div_container_Video.getElementsByClassName("clases_for_btn_speed").length; y++) {
                    div_container_Video.getElementsByClassName("clases_for_btn_speed")[y].className = ` clases_for_btn_speed Theme_Qu_level_2_${_Theme_} `;
                }
                for (let c = 0; c < div_container_Video.getElementsByClassName("btn_track").length; c++) {
                    div_container_Video.getElementsByClassName("btn_track")[c].className = `btn_track Theme_Qu_level_2_${_Theme_} `;
                }
                div_container_Video_controls.className = ` Cnt_Vid_controls  Theme_CNt_${_Theme_} `;
                btn_FullScreen.className = `btn_fullscreen btns_control btns_control_${_Theme_} `;
                btn_cog.className = `btn_cog btns_control btns_control_${_Theme_} `;
                btn_mute_or_unmute.className = `btn_mute_unmute btns_control btns_control_${_Theme_} `;
                btn_ply_or_pause.className = `btn_ply btns_control btns_control_${_Theme_} `
                a_Addres_Ad.className = `btns_control_${_Theme_} `
            }
            if (e.target.color == "blue") {
                _Theme_ = "blue"

                COLOR_SELECT_BTNS_COG = {
                    background: "rgba(200,200,200,1)",
                    color: "blue",
                    border: ""
                }
                if (Counter_Change_Theme_Speed == 1) {
                    set_bg_col_Speed(e_ghabli_Speed_Theme)
                }
                if (Counter_Change_Theme_Quality == 1) {
                    set_bg_col_Quality(e_ghabli_Quality_Theme)
                }
                if (Counter_Change_Theme_Sub == 1) {
                    set_bg_col_Sub(e_ghabli_Sub_Theme)
                }
                for (let l = 0; l < div_container_Video.getElementsByClassName("btn_quality_level_2").length; l++) {
                    div_container_Video.getElementsByClassName("btn_quality_level_2")[l].className = ` btn_quality_level_2 Theme_Qu_level_2_${_Theme_} `;
                }
                for (let y = 0; y < div_container_Video.getElementsByClassName("clases_for_btn_speed").length; y++) {
                    div_container_Video.getElementsByClassName("clases_for_btn_speed")[y].className = ` clases_for_btn_speed Theme_Qu_level_2_${_Theme_} `;
                }
                for (let c = 0; c < div_container_Video.getElementsByClassName("btn_track").length; c++) {
                    div_container_Video.getElementsByClassName("btn_track")[c].className = `btn_track Theme_Qu_level_2_${_Theme_} `;
                }
                div_container_Video_controls.className = ` Cnt_Vid_controls  Theme_CNt_${_Theme_} `;
                btn_FullScreen.className = `btn_fullscreen btns_control btns_control_${_Theme_} `;
                btn_cog.className = `btn_cog btns_control btns_control_${_Theme_} `;
                btn_mute_or_unmute.className = `btn_mute_unmute btns_control btns_control_${_Theme_} `;
                btn_ply_or_pause.className = `btn_ply btns_control btns_control_${_Theme_} `
                a_Addres_Ad.className = `btns_control_${_Theme_} `

            }
            if (e.target.color == "white") {
                _Theme_ = "white"

                COLOR_SELECT_BTNS_COG = {
                    background: "rgba(190,190,190,1)",
                    color: "black",
                    border: ""
                }
                if (Counter_Change_Theme_Speed == 1) {
                    set_bg_col_Speed(e_ghabli_Speed_Theme)
                }
                if (Counter_Change_Theme_Quality == 1) {
                    set_bg_col_Quality(e_ghabli_Quality_Theme)
                }
                if (Counter_Change_Theme_Sub == 1) {
                    set_bg_col_Sub(e_ghabli_Sub_Theme)
                }
                for (let l = 0; l < div_container_Video.getElementsByClassName("btn_quality_level_2").length; l++) {
                    div_container_Video.getElementsByClassName("btn_quality_level_2")[l].className = ` btn_quality_level_2 Theme_Qu_level_2_${_Theme_} `;
                }
                for (let y = 0; y < div_container_Video.getElementsByClassName("clases_for_btn_speed").length; y++) {
                    div_container_Video.getElementsByClassName("clases_for_btn_speed")[y].className = ` clases_for_btn_speed Theme_Qu_level_2_${_Theme_} `;
                }
                for (let c = 0; c < div_container_Video.getElementsByClassName("btn_track").length; c++) {
                    div_container_Video.getElementsByClassName("btn_track")[c].className = `btn_track Theme_Qu_level_2_${_Theme_} `;
                }
                div_container_Video_controls.className = ` Cnt_Vid_controls  Theme_CNt_${_Theme_} `;
                btn_FullScreen.className = `btn_fullscreen btns_control btns_control_${_Theme_} `;
                btn_cog.className = `btn_cog btns_control btns_control_${_Theme_} `;
                btn_mute_or_unmute.className = `btn_mute_unmute btns_control btns_control_${_Theme_} `;
                btn_ply_or_pause.className = `btn_ply btns_control btns_control_${_Theme_} `
                a_Addres_Ad.className = `btns_control_${_Theme_} `
            }

            if (counter_for_e_ghable > 0) {
                e_ghable_for_style_btns_theme.setAttribute("style", "");
            }
            e.target.style = "width:2.3vw;height:2.3vw;"
            e_ghable_for_style_btns_theme = e.target;
        }
        couter_create_video_player++
        responsive()
    }
}


let video_lenght = document.getElementsByClassName("video_player_fzl").length;
for (let k = 0; k < video_lenght; k++) {
    create_controls(document.getElementsByClassName("video_player_fzl")[k], k)
}
function Run_Player_Fzl() {
    couter_create_video_player = 0
    let video_lenght = document.getElementsByClassName("container_video").length;
    for (let k = 0; k < video_lenght; k++) {
        let Div_Countainer_Ghabli = document.getElementsByClassName("container_video")[k]
        let Class_Div_Container = Div_Countainer_Ghabli.classList
        let Class_Div_Container_For_Vid = ""
        Class_Div_Container = Array.prototype.slice.call(Class_Div_Container)
        Class_Div_Container.filter(function (e) {
            if (e != "container_video") {
                Class_Div_Container_For_Vid += e + " "
            }
        })

        let Style_Div_Container_For_Vid = Div_Countainer_Ghabli.getAttribute("style")
        let Vid_Ghabli = document.getElementsByClassName("video_player_fzl")[k]
        Vid_Ghabli.setAttribute("style", Style_Div_Container_For_Vid)


        if (Vid_Ghabli.getAttribute("Width_Att") !== "" && Vid_Ghabli.getAttribute("Width_Att") !== 0 && Vid_Ghabli.getAttribute("Width_Att") !== null && Vid_Ghabli.getAttribute("Width_Att") !== "null") {
            Vid_Ghabli.width = Vid_Ghabli.getAttribute("Width_Att")
        }
        if (Vid_Ghabli.getAttribute("Height_Att") != "" && Vid_Ghabli.getAttribute("Height_Att") != 0 && Vid_Ghabli.getAttribute("Height_Att") != null && Vid_Ghabli.getAttribute("Width_Att") !== "null") {
            Vid_Ghabli.height = Vid_Ghabli.getAttribute("Height_Att")
        }
        Div_Countainer_Ghabli.removeAttribute("style")
        Vid_Ghabli.className = `video_player_fzl ${Class_Div_Container_For_Vid}`
        while (Div_Countainer_Ghabli.firstChild) {
            Div_Countainer_Ghabli.removeChild(Div_Countainer_Ghabli.firstChild)
        }
        let Vid_Ghabli_Copy = Vid_Ghabli
        Div_Countainer_Ghabli.replaceWith(Vid_Ghabli)
        Vid_Ghabli_Copy.removeChild(Vid_Ghabli_Copy.getElementsByClassName("Src_Vid_Ok")[0])
        create_controls(Vid_Ghabli_Copy, k)

    }
}

