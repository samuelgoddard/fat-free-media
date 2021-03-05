import React from 'react';
import Modal from 'react-modal';
import Container from './container'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-20%',
    overflow              : 'visible',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#scroll-container')

export default function TeamModal({ children }) {
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

  return (
    <div className="relative">
      <button className="tracking-tight inline-block items-center group hover:border-none focus:border-none focus:outline-none hover:outline-none" onClick={openModal}>
        <div className="flex items-center relative mb-2 pt-2">
          <span className="block relative z-10">Read Bio</span>

          <span className={`absolute top-0 right-0 bottom-0 z-0 w-full border-current group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-300 border-b`}></span>

          <span className={`flex items-center justify-center absolute z-0 w-full h-full text-yellow`}>
            <svg xmlns="http://www.w3.org/2000/svg" className={`block transform opacity-0 scale-0 group-hover:scale-100 group-focus:scale-100 group-hover:opacity-100 group-focus:opacity-100 mt-1 transition ease-in-out duration-300 blend-difference w-10`} viewBox="0 0 85.128 85.499"><path fill="currentColor" d="M15.161 76.238c.132.087.261.181.4.267l.409.256c.542.34 1.054.688 1.472.961a7.266 7.266 0 01.859.59 7.683 7.683 0 00.9.736c.32.215.65.414.985.6.662.393 1.379.685 2.075 1.009l3.62 1.608a6.793 6.793 0 002.108.659l.546.2c.35.118.856.268 1.461.457s1.323.365 2.089.564c.192.047.386.1.585.144l.6.123 1.235.25c.416.072.834.13 1.244.194s.814.134 1.208.167l1.135.117.526.053c.17.013.335.02.493.029l1.528.082c.369.008.581.007.581.007.527.008.607.209 1.36.184.742-.042 1.4-.111 1.991-.163.3-.022.571-.073.833-.108l.738-.111.655-.1c.205-.038.4-.08.58-.117l.982-.2c.591-.109 1.062-.239 1.533-.317s.938-.128 1.5-.2c.293-.033.605-.065.907-.118a2.814 2.814 0 00.839-.254 4.165 4.165 0 011.23-.411c.2-.037.4-.059.6-.084l.591-.085a5.924 5.924 0 001.2-.285 3 3 0 00.61-.309 4.357 4.357 0 00.615-.477 2.863 2.863 0 002.191-.78 3.6 3.6 0 01.633-.335c.215-.1.448-.192.72-.315a9.55 9.55 0 00.961-.5 11.238 11.238 0 001.3-.957q.254-.211.52-.4c.174-.134.348-.269.527-.4.357-.258.725-.5 1.1-.737s.735-.494 1.105-.737l.551-.372.273-.188.262-.2c.388-.3.709-.548.981-.748s.5-.353.678-.493c.368-.272.614-.425.868-.592.127-.083.256-.17.4-.277a5.357 5.357 0 00.507-.407c.193-.173.419-.384.694-.652l.45-.446.256-.258.265-.3c.41-.461.772-.86 1.093-1.207s.577-.669.817-.936.444-.5.628-.7.329-.385.467-.545c.273-.324.482-.579.68-.866a4.727 4.727 0 00.29-.469c.091-.177.185-.375.287-.605a5.692 5.692 0 01.716-1.186c.26-.369.551-.712.857-1.068.152-.178.309-.359.464-.549s.294-.4.439-.611.287-.44.424-.681a5.18 5.18 0 00.375-.783c.124-.319.365-.7.632-1.2a6.226 6.226 0 00.385-.854 9.012 9.012 0 00.332-1.073c0-.009.037-.1.1-.244s.126-.36.215-.611l.3-.855.168-.482.151-.506.3-1 .137-.465.106-.426c.133-.532.229-.9.249-.953a1.8 1.8 0 00.113-.514c.011-.184.009-.374.021-.553a8.185 8.185 0 01.23-1.915c.06-.2.143-.433.261-.844.056-.206.134-.455.2-.769s.132-.692.208-1.151a5.612 5.612 0 00.053-.74c0-.313-.01-.679-.016-1.061 0-.762-.053-1.583 0-2.17.042-.559.068-1.119.072-1.679.2-.262.219-.707-.009-1.416a2.13 2.13 0 01-.047-.16 12.872 12.872 0 00-.445-2.5 2.669 2.669 0 01-.182-1.133 2.524 2.524 0 00-.078-.6 11.52 11.52 0 00-.478-1.616 3.981 3.981 0 01-.055-.165 6.668 6.668 0 00-.1-.909c-.008-.042-.019-.083-.027-.124a2.6 2.6 0 00-.119-.526c-.039-.158-.08-.316-.123-.473-.19-.746-.491-1.46-.753-2.181l-.173-.45a6.24 6.24 0 00-.551-1.778l-.139-.315c-.048-.1-.1-.206-.154-.308l-.313-.6-.093-.241a6.8 6.8 0 00-1.024-1.957l-.246-.526c-.164-.331-.416-.8-.71-1.356s-.677-1.193-1.078-1.876c-.1-.169-.2-.345-.312-.516l-.341-.515-.7-1.05c-.243-.345-.5-.682-.742-1.017s-.481-.671-.737-.972l-.72-.885-.334-.409c-.111-.129-.223-.25-.328-.369l-1.022-1.138a21.722 21.722 0 00-.405-.415c-.367-.379-.281-.577-.831-1.091-.555-.495-1.07-.912-1.524-1.292-.224-.194-.456-.352-.665-.512l-.6-.444-.536-.391c-.172-.119-.338-.224-.492-.327l-.837-.551c-.5-.341-.92-.582-1.308-.86s-.754-.573-1.2-.919c-.231-.184-.474-.382-.725-.558a2.816 2.816 0 00-.773-.413 4.163 4.163 0 01-1.161-.579c-.167-.115-.324-.241-.482-.363l-.478-.358a5.924 5.924 0 00-1.053-.649 3.007 3.007 0 00-.65-.213 4.355 4.355 0 00-.772-.1 2.863 2.863 0 00-2.1-1 3.6 3.6 0 01-.684-.211c-.223-.082-.452-.181-.732-.287a9.584 9.584 0 00-1.031-.328 11.2 11.2 0 00-1.6-.242c-.219-.02-.437-.048-.653-.081s-.437-.056-.654-.092c-.435-.07-.866-.158-1.3-.256s-.869-.17-1.3-.26l-.652-.127-.326-.06-.328-.042c-.489-.06-.889-.114-1.222-.165s-.6-.1-.828-.131c-.453-.068-.734-.134-1.032-.2a8.936 8.936 0 00-.482-.089 5.342 5.342 0 00-.646-.071 23.16 23.16 0 00-.952-.03h-.997l-.4.022c-.616.036-1.154.062-1.627.081s-.881.065-1.239.085-.666.038-.937.05-.5.04-.716.055c-.422.036-.751.068-1.094.132a4.722 4.722 0 00-.536.127c-.19.06-.4.134-.631.225a5.7 5.7 0 01-1.346.332c-.444.077-.893.114-1.361.15-.234.019-.472.035-.716.06s-.489.072-.742.121-.514.108-.782.182a5.192 5.192 0 00-.819.288c-.314.138-.753.237-1.295.4a6.2 6.2 0 00-.876.332 9.045 9.045 0 00-.993.524c-.008 0-.094.043-.24.105s-.344.165-.584.28l-.816.394-.459.222-.465.251-.918.5-.426.232-.377.226c-.47.282-.8.478-.85.5a1.809 1.809 0 00-.443.284c-.138.122-.27.258-.405.376a8.181 8.181 0 01-1.517 1.191c-.183.1-.407.2-.781.412-.185.106-.416.227-.683.405s-.583.4-.961.666a5.583 5.583 0 00-.561.486l-.739.761c-.542.536-1.082 1.157-1.535 1.534a16.312 16.312 0 00-3.765 4.372c-.451.778-.507.774-.673.929a2.519 2.519 0 00-.371.482 11.491 11.491 0 00-.8 1.481 2.655 2.655 0 01-.654.907 5.25 5.25 0 00-.868 1.782 3.539 3.539 0 01-.762 1.48 5.517 5.517 0 00-1.039 1.851l-.125.321c-.04.108-.073.218-.109.327l-.209.656-.206.656-.1.327-.091.331c-.122.441-.251.88-.4 1.315l-.111.326-.1.328q-.107.327-.23.652a6.425 6.425 0 00-.239.8c-.068.272-.1.554-.14.827a70.58 70.58 0 01-.217 1.414q-.088.727-.193 1.481c-.079.5-.125 1.014-.181 1.531l-.086.78-.044.392-.028.395-.122 1.589c-.029.532-.042 1.064-.065 1.595-.008.265-.026.53-.027.794s0 .527 0 .789v.783c0 .26 0 .518.016.774l.076 1.512.021.369.036.364.073.715.075.7.039.34.053.332c.071.44.142.864.215 1.269.039.2.068.4.115.593l.136.559c.09.362.181.7.273 1.019a7.919 7.919 0 00.3.866c.1.261.207.5.31.7a1.518 1.518 0 01.114.458 4.241 4.241 0 00.2.852 4.022 4.022 0 00.267.623 3.4 3.4 0 00.575.778c.378.381.65.595.531 1.263a1.88 1.88 0 00-.015.645 6.33 6.33 0 00.311 1c.085.228.19.5.316.813s.3.674.492 1.1.405.91.692 1.45l.444.872c.08.154.155.317.247.477l.28.5a3.411 3.411 0 00.645.972 2.959 2.959 0 011.023 1.35 14.706 14.706 0 00.895 1.518l.362.547c.133.2.291.394.457.613l.544.7.307.382.349.391c.411.453.755.864 1.08 1.218.28.3.532.563.77.81" data-name="Path 19"/></svg>
          </span>
        </div>
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="absolute top-0 right-0 -mt-4 md:-mt-6 -mr-4 md:-mr-6">
          <button className="inline-block w-10 md:w-16 relative group transition ease-in-our duration-300 burger-wrap text-orange" onClick={closeModal}>
            <svg className={`absolute top-0 left-0 z-10 mt-3 md:mt-5 ml-3 md:ml-5 w-4 md:w-6 transition ease-in-our duration-300 text-white group-hover:text-off-black group-focus:text-off-black`} viewBox="0 0 54 52" width="54" xmlns="http://www.w3.org/2000/svg"><clipPath id="a"><path d="M0 0h54v52H0z"/></clipPath><g clipPath="url(#a)"><path d="M39.778 50.913a1.121 1.121 0 00.933.4l13.29-.888q-.532-.881-1.115-1.73a1.515 1.515 0 00-.068-.09c-3.044-3.693-6.181-7.47-9.317-11.244q-3.448-4.149-6.887-8.306c-.689-.835-1.3-1.706-1.9-2.551-.251-.359-.5-.717-.758-1.07l-.636-.877 1.255-1.7c.374-.514.678-.933 1-1.339l2.42-3.023c3.413-4.265 6.822-8.528 10.28-12.753a4.971 4.971 0 001.335-4.065 1.138 1.138 0 00-1.026-.979L38.446-.174a1.116 1.116 0 00-.985.433L27.19 13.649a1.121 1.121 0 01-1.755.03L15.71 1.854a1.132 1.132 0 00-.862-.406c-.726 0-1.443-.013-2.151-.021-2.47-.033-4.8-.059-7.124.065a2.418 2.418 0 00-2.092 1.027 2.651 2.651 0 00.216 2.507 18.861 18.861 0 001.636 2.146c2.85 3.8 5.62 7.517 8.456 11.32l4.807 6.445-.627.878c-2.6 3.636-5.388 7.167-8.089 10.583-3.292 4.161-6.671 8.436-9.847 13.078a1.128 1.128 0 00.85 1.756l10.238.739a1.119 1.119 0 00.958-.42l12.861-16.2a1.122 1.122 0 011.737-.025z" fill="currentColor"/></g></svg>

            <svg className="relative z-0" xmlns="http://www.w3.org/2000/svg" className="block" viewBox="0 0 85.128 85.499"><path fill="currentColor" d="M15.161 76.238c.132.087.261.181.4.267l.409.256c.542.34 1.054.688 1.472.961a7.266 7.266 0 01.859.59 7.683 7.683 0 00.9.736c.32.215.65.414.985.6.662.393 1.379.685 2.075 1.009l3.62 1.608a6.793 6.793 0 002.108.659l.546.2c.35.118.856.268 1.461.457s1.323.365 2.089.564c.192.047.386.1.585.144l.6.123 1.235.25c.416.072.834.13 1.244.194s.814.134 1.208.167l1.135.117.526.053c.17.013.335.02.493.029l1.528.082c.369.008.581.007.581.007.527.008.607.209 1.36.184.742-.042 1.4-.111 1.991-.163.3-.022.571-.073.833-.108l.738-.111.655-.1c.205-.038.4-.08.58-.117l.982-.2c.591-.109 1.062-.239 1.533-.317s.938-.128 1.5-.2c.293-.033.605-.065.907-.118a2.814 2.814 0 00.839-.254 4.165 4.165 0 011.23-.411c.2-.037.4-.059.6-.084l.591-.085a5.924 5.924 0 001.2-.285 3 3 0 00.61-.309 4.357 4.357 0 00.615-.477 2.863 2.863 0 002.191-.78 3.6 3.6 0 01.633-.335c.215-.1.448-.192.72-.315a9.55 9.55 0 00.961-.5 11.238 11.238 0 001.3-.957q.254-.211.52-.4c.174-.134.348-.269.527-.4.357-.258.725-.5 1.1-.737s.735-.494 1.105-.737l.551-.372.273-.188.262-.2c.388-.3.709-.548.981-.748s.5-.353.678-.493c.368-.272.614-.425.868-.592.127-.083.256-.17.4-.277a5.357 5.357 0 00.507-.407c.193-.173.419-.384.694-.652l.45-.446.256-.258.265-.3c.41-.461.772-.86 1.093-1.207s.577-.669.817-.936.444-.5.628-.7.329-.385.467-.545c.273-.324.482-.579.68-.866a4.727 4.727 0 00.29-.469c.091-.177.185-.375.287-.605a5.692 5.692 0 01.716-1.186c.26-.369.551-.712.857-1.068.152-.178.309-.359.464-.549s.294-.4.439-.611.287-.44.424-.681a5.18 5.18 0 00.375-.783c.124-.319.365-.7.632-1.2a6.226 6.226 0 00.385-.854 9.012 9.012 0 00.332-1.073c0-.009.037-.1.1-.244s.126-.36.215-.611l.3-.855.168-.482.151-.506.3-1 .137-.465.106-.426c.133-.532.229-.9.249-.953a1.8 1.8 0 00.113-.514c.011-.184.009-.374.021-.553a8.185 8.185 0 01.23-1.915c.06-.2.143-.433.261-.844.056-.206.134-.455.2-.769s.132-.692.208-1.151a5.612 5.612 0 00.053-.74c0-.313-.01-.679-.016-1.061 0-.762-.053-1.583 0-2.17.042-.559.068-1.119.072-1.679.2-.262.219-.707-.009-1.416a2.13 2.13 0 01-.047-.16 12.872 12.872 0 00-.445-2.5 2.669 2.669 0 01-.182-1.133 2.524 2.524 0 00-.078-.6 11.52 11.52 0 00-.478-1.616 3.981 3.981 0 01-.055-.165 6.668 6.668 0 00-.1-.909c-.008-.042-.019-.083-.027-.124a2.6 2.6 0 00-.119-.526c-.039-.158-.08-.316-.123-.473-.19-.746-.491-1.46-.753-2.181l-.173-.45a6.24 6.24 0 00-.551-1.778l-.139-.315c-.048-.1-.1-.206-.154-.308l-.313-.6-.093-.241a6.8 6.8 0 00-1.024-1.957l-.246-.526c-.164-.331-.416-.8-.71-1.356s-.677-1.193-1.078-1.876c-.1-.169-.2-.345-.312-.516l-.341-.515-.7-1.05c-.243-.345-.5-.682-.742-1.017s-.481-.671-.737-.972l-.72-.885-.334-.409c-.111-.129-.223-.25-.328-.369l-1.022-1.138a21.722 21.722 0 00-.405-.415c-.367-.379-.281-.577-.831-1.091-.555-.495-1.07-.912-1.524-1.292-.224-.194-.456-.352-.665-.512l-.6-.444-.536-.391c-.172-.119-.338-.224-.492-.327l-.837-.551c-.5-.341-.92-.582-1.308-.86s-.754-.573-1.2-.919c-.231-.184-.474-.382-.725-.558a2.816 2.816 0 00-.773-.413 4.163 4.163 0 01-1.161-.579c-.167-.115-.324-.241-.482-.363l-.478-.358a5.924 5.924 0 00-1.053-.649 3.007 3.007 0 00-.65-.213 4.355 4.355 0 00-.772-.1 2.863 2.863 0 00-2.1-1 3.6 3.6 0 01-.684-.211c-.223-.082-.452-.181-.732-.287a9.584 9.584 0 00-1.031-.328 11.2 11.2 0 00-1.6-.242c-.219-.02-.437-.048-.653-.081s-.437-.056-.654-.092c-.435-.07-.866-.158-1.3-.256s-.869-.17-1.3-.26l-.652-.127-.326-.06-.328-.042c-.489-.06-.889-.114-1.222-.165s-.6-.1-.828-.131c-.453-.068-.734-.134-1.032-.2a8.936 8.936 0 00-.482-.089 5.342 5.342 0 00-.646-.071 23.16 23.16 0 00-.952-.03h-.997l-.4.022c-.616.036-1.154.062-1.627.081s-.881.065-1.239.085-.666.038-.937.05-.5.04-.716.055c-.422.036-.751.068-1.094.132a4.722 4.722 0 00-.536.127c-.19.06-.4.134-.631.225a5.7 5.7 0 01-1.346.332c-.444.077-.893.114-1.361.15-.234.019-.472.035-.716.06s-.489.072-.742.121-.514.108-.782.182a5.192 5.192 0 00-.819.288c-.314.138-.753.237-1.295.4a6.2 6.2 0 00-.876.332 9.045 9.045 0 00-.993.524c-.008 0-.094.043-.24.105s-.344.165-.584.28l-.816.394-.459.222-.465.251-.918.5-.426.232-.377.226c-.47.282-.8.478-.85.5a1.809 1.809 0 00-.443.284c-.138.122-.27.258-.405.376a8.181 8.181 0 01-1.517 1.191c-.183.1-.407.2-.781.412-.185.106-.416.227-.683.405s-.583.4-.961.666a5.583 5.583 0 00-.561.486l-.739.761c-.542.536-1.082 1.157-1.535 1.534a16.312 16.312 0 00-3.765 4.372c-.451.778-.507.774-.673.929a2.519 2.519 0 00-.371.482 11.491 11.491 0 00-.8 1.481 2.655 2.655 0 01-.654.907 5.25 5.25 0 00-.868 1.782 3.539 3.539 0 01-.762 1.48 5.517 5.517 0 00-1.039 1.851l-.125.321c-.04.108-.073.218-.109.327l-.209.656-.206.656-.1.327-.091.331c-.122.441-.251.88-.4 1.315l-.111.326-.1.328q-.107.327-.23.652a6.425 6.425 0 00-.239.8c-.068.272-.1.554-.14.827a70.58 70.58 0 01-.217 1.414q-.088.727-.193 1.481c-.079.5-.125 1.014-.181 1.531l-.086.78-.044.392-.028.395-.122 1.589c-.029.532-.042 1.064-.065 1.595-.008.265-.026.53-.027.794s0 .527 0 .789v.783c0 .26 0 .518.016.774l.076 1.512.021.369.036.364.073.715.075.7.039.34.053.332c.071.44.142.864.215 1.269.039.2.068.4.115.593l.136.559c.09.362.181.7.273 1.019a7.919 7.919 0 00.3.866c.1.261.207.5.31.7a1.518 1.518 0 01.114.458 4.241 4.241 0 00.2.852 4.022 4.022 0 00.267.623 3.4 3.4 0 00.575.778c.378.381.65.595.531 1.263a1.88 1.88 0 00-.015.645 6.33 6.33 0 00.311 1c.085.228.19.5.316.813s.3.674.492 1.1.405.91.692 1.45l.444.872c.08.154.155.317.247.477l.28.5a3.411 3.411 0 00.645.972 2.959 2.959 0 011.023 1.35 14.706 14.706 0 00.895 1.518l.362.547c.133.2.291.394.457.613l.544.7.307.382.349.391c.411.453.755.864 1.08 1.218.28.3.532.563.77.81" data-name="Path 19"/></svg>
          </button>
        </div>
    
        { children }
      </Modal>
    </div>
  )
}