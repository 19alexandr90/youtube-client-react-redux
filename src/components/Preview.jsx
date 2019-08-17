import React from 'react';

const Preview = (props) => {
  const { title } = props;
  return (
    <div>
      <figure className="preview">
        <img src="https://cdn.igromania.ru/mnt/news/5/3/e/4/4/f/81277/86d09380a4511c53_1200xH.jpg" alt="dota" />
        <figcaption>
          <a className="figcaption-link" href="https://cdn.igromania.ru/mnt/news/5/3/e/4/4/f/81277/86d09380a4511c53_1200xH.jpg">{title}</a>
        </figcaption>
      </figure>
    </div>
  )
}

export default Preview;
