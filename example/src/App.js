import React, { useRef } from "react";
import { useWindowSize, useMousePosition, useScrollProgress } from "react-hooks-lab";

const App = () => {
  const { innerWidth, innerHeight } = useWindowSize(100);
  //const { x, y } = useMousePosition();
  const scrollRef = useRef();

  const scrollProgress = useScrollProgress(scrollRef);

  return (
    <>
      <div className="scroll" style={{ width: `${scrollProgress}%` }}></div>
      <div>
        <h2>Window Size Hook</h2>
        window width: {innerWidth}
        <br />
        window height: {innerHeight}
      </div>
      <div>
        <h2>Mouse Position Hook</h2>
        mouse position x: {}
        <br />
        mouse position y: {}
      </div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsa illum aperiam, nisi suscipit, amet perspiciatis doloremque vitae, saepe
      culpa voluptates eius quis dolor id eligendi veritatis voluptas quibusdam. Magnam? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Labore iure iste esse soluta nulla sunt, ipsum quos repellendus omnis aliquid nobis quasi doloremque error alias tempore officia, commodi optio
      deleniti! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat eum, unde quibusdam maiores deleniti minus, minima dolorum ad a
      neque inventore cumque totam quos at, ex amet molestiae autem beatae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga explicabo
      suscipit maiores eaque est iste labore omnis pariatur, qui beatae. Temporibus voluptatum eius facere ex? Delectus cum assumenda et dignissimos!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsa illum aperiam, nisi suscipit, amet perspiciatis doloremque vitae, saepe
      culpa voluptates eius quis dolor id eligendi veritatis voluptas quibusdam. Magnam? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Labore iure iste esse soluta nulla sunt, ipsum quos repellendus omnis aliquid nobis quasi doloremque error alias tempore officia, commodi optio
      deleniti! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat eum, unde quibusdam maiores deleniti minus, minima dolorum ad a
      neque inventore cumque totam quos at, ex amet molestiae autem beatae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga explicabo
      suscipit maiores eaque est iste labore omnis pariatur, qui beatae. Temporibus voluptatum eius facere ex? Delectus cum assumenda et dignissimos!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsa illum aperiam, nisi suscipit, amet perspiciatis doloremque vitae, saepe
      culpa voluptates eius quis dolor id eligendi veritatis voluptas quibusdam. Magnam? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Labore iure iste esse soluta nulla sunt, ipsum quos repellendus omnis aliquid nobis quasi doloremque error alias tempore officia, commodi optio
      deleniti! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat eum, unde quibusdam maiores deleniti minus, minima dolorum ad a
      neque inventore cumque totam quos at, ex amet molestiae autem beatae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga explicabo
      suscipit maiores eaque est iste labore omnis pariatur, qui beatae. Temporibus voluptatum eius facere ex? Delectus cum assumenda et dignissimos!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsa illum aperiam, nisi suscipit, amet perspiciatis doloremque vitae, saepe
      culpa voluptates eius quis dolor id eligendi veritatis voluptas quibusdam. Magnam? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Labore iure iste esse soluta nulla sunt, ipsum quos repellendus omnis aliquid nobis quasi doloremque error alias tempore officia, commodi optio
      deleniti! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat eum, unde quibusdam maiores deleniti minus, minima dolorum ad a
      neque inventore cumque totam quos at, ex amet molestiae autem beatae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga explicabo
      suscipit maiores eaque est iste labore omnis pariatur, qui beatae. Temporibus voluptatum eius facere ex? Delectus cum assumenda et dignissimos!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsa illum aperiam, nisi suscipit, amet perspiciatis doloremque vitae, saepe
      culpa voluptates eius quis dolor id eligendi veritatis voluptas quibusdam. Magnam? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Labore iure iste esse soluta nulla sunt, ipsum quos repellendus omnis aliquid nobis quasi doloremque error alias tempore officia, commodi optio
      deleniti! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat eum, unde quibusdam maiores deleniti minus, minima dolorum ad a
      neque inventore cumque totam quos at, ex amet molestiae autem beatae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga explicabo
      suscipit maiores eaque est iste labore omnis pariatur, qui beatae. Temporibus voluptatum eius facere ex? Delectus cum assumenda et dignissimos!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsa illum aperiam, nisi suscipit, amet perspiciatis doloremque vitae, saepe
      culpa voluptates eius quis dolor id eligendi veritatis voluptas quibusdam. Magnam? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Labore iure iste esse soluta nulla sunt, ipsum quos repellendus omnis aliquid nobis quasi doloremque error alias tempore officia, commodi optio
      deleniti! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat eum, unde quibusdam maiores deleniti minus, minima dolorum ad a
      neque inventore cumque totam quos at, ex amet molestiae autem beatae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga explicabo
      suscipit maiores eaque est iste labore omnis pariatur, qui beatae. Temporibus voluptatum eius facere ex? Delectus cum assumenda et dignissimos!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsa illum aperiam, nisi suscipit, amet perspiciatis doloremque vitae, saepe
      culpa voluptates eius quis dolor id eligendi veritatis voluptas quibusdam. Magnam? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Labore iure iste esse soluta nulla sunt, ipsum quos repellendus omnis aliquid nobis quasi doloremque error alias tempore officia, commodi optio
      deleniti! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat eum, unde quibusdam maiores deleniti minus, minima dolorum ad a
      neque inventore cumque totam quos at, ex amet molestiae autem beatae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga explicabo
      suscipit maiores eaque est iste labore omnis pariatur, qui beatae. Temporibus voluptatum eius facere ex? Delectus cum assumenda et dignissimos!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsa illum aperiam, nisi suscipit, amet perspiciatis doloremque vitae, saepe
      culpa voluptates eius quis dolor id eligendi veritatis voluptas quibusdam. Magnam? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Labore iure iste esse soluta nulla sunt, ipsum quos repellendus omnis aliquid nobis quasi doloremque error alias tempore officia, commodi optio
      deleniti! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat eum, unde quibusdam maiores deleniti minus, minima dolorum ad a
      neque inventore cumque totam quos at, ex amet molestiae autem beatae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga explicabo
      suscipit maiores eaque est iste labore omnis pariatur, qui beatae. Temporibus voluptatum eius facere ex? Delectus cum assumenda et dignissimos!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsa illum aperiam, nisi suscipit, amet perspiciatis doloremque vitae, saepe
      culpa voluptates eius quis dolor id eligendi veritatis voluptas quibusdam. Magnam? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Labore iure iste esse soluta nulla sunt, ipsum quos repellendus omnis aliquid nobis quasi doloremque error alias tempore officia, commodi optio
      deleniti! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat eum, unde quibusdam maiores deleniti minus, minima dolorum ad a
      neque inventore cumque totam quos at, ex amet molestiae autem beatae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga explicabo
      suscipit maiores eaque est iste labore omnis pariatur, qui beatae. Temporibus voluptatum eius facere ex? Delectus cum assumenda et dignissimos!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsa illum aperiam, nisi suscipit, amet perspiciatis doloremque vitae, saepe
      culpa voluptates eius quis dolor id eligendi veritatis voluptas quibusdam. Magnam? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Labore iure iste esse soluta nulla sunt, ipsum quos repellendus omnis aliquid nobis quasi doloremque error alias tempore officia, commodi optio
      deleniti! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat eum, unde quibusdam maiores deleniti minus, minima dolorum ad a
      neque inventore cumque totam quos at, ex amet molestiae autem beatae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga explicabo
      suscipit maiores eaque est iste labore omnis pariatur, qui beatae. Temporibus voluptatum eius facere ex? Delectus cum assumenda et dignissimos!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsa illum aperiam, nisi suscipit, amet perspiciatis doloremque vitae, saepe
      culpa voluptates eius quis dolor id eligendi veritatis voluptas quibusdam. Magnam? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Labore iure iste esse soluta nulla sunt, ipsum quos repellendus omnis aliquid nobis quasi doloremque error alias tempore officia, commodi optio
      deleniti! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat eum, unde quibusdam maiores deleniti minus, minima dolorum ad a
      neque inventore cumque totam quos at, ex amet molestiae autem beatae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga explicabo
      suscipit maiores eaque est iste labore omnis pariatur, qui beatae. Temporibus voluptatum eius facere ex? Delectus cum assumenda et dignissimos!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsa illum aperiam, nisi suscipit, amet perspiciatis doloremque vitae, saepe
      culpa voluptates eius quis dolor id eligendi veritatis voluptas quibusdam. Magnam? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Labore iure iste esse soluta nulla sunt, ipsum quos repellendus omnis aliquid nobis quasi doloremque error alias tempore officia, commodi optio
      deleniti! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat eum, unde quibusdam maiores deleniti minus, minima dolorum ad a
      neque inventore cumque totam quos at, ex amet molestiae autem beatae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga explicabo
      suscipit maiores eaque est iste labore omnis pariatur, qui beatae. Temporibus voluptatum eius facere ex? Delectus cum assumenda et dignissimos!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsa illum aperiam, nisi suscipit, amet perspiciatis doloremque vitae, saepe
      culpa voluptates eius quis dolor id eligendi veritatis voluptas quibusdam. Magnam? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Labore iure iste esse soluta nulla sunt, ipsum quos repellendus omnis aliquid nobis quasi doloremque error alias tempore officia, commodi optio
      deleniti! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat eum, unde quibusdam maiores deleniti minus, minima dolorum ad a
      neque inventore cumque totam quos at, ex amet molestiae autem beatae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga explicabo
      suscipit maiores eaque est iste labore omnis pariatur, qui beatae. Temporibus voluptatum eius facere ex? Delectus cum assumenda et dignissimos!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsa illum aperiam, nisi suscipit, amet perspiciatis doloremque vitae, saepe
      culpa voluptates eius quis dolor id eligendi veritatis voluptas quibusdam. Magnam? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Labore iure iste esse soluta nulla sunt, ipsum quos repellendus omnis aliquid nobis quasi doloremque error alias tempore officia, commodi optio
      deleniti! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat eum, unde quibusdam maiores deleniti minus, minima dolorum ad a
      neque inventore cumque totam quos at, ex amet molestiae autem beatae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga explicabo
      suscipit maiores eaque est iste labore omnis pariatur, qui beatae. Temporibus voluptatum eius facere ex? Delectus cum assumenda et dignissimos!
      <div ref={scrollRef} style={{ height: "400vh" }}>
        <h2>Scroll Progress Hook</h2>
        {scrollProgress}
      </div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsa illum aperiam, nisi suscipit, amet perspiciatis doloremque vitae, saepe
      culpa voluptates eius quis dolor id eligendi veritatis voluptas quibusdam. Magnam? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Labore iure iste esse soluta nulla sunt, ipsum quos repellendus omnis aliquid nobis quasi doloremque error alias tempore officia, commodi optio
      deleniti! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat eum, unde quibusdam maiores deleniti minus, minima dolorum ad a
      neque inventore cumque totam quos at, ex amet molestiae autem beatae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga explicabo
      suscipit maiores eaque est iste labore omnis pariatur, qui beatae. Temporibus voluptatum eius facere ex? Delectus cum assumenda et dignissimos!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsa illum aperiam, nisi suscipit, amet perspiciatis doloremque vitae, saepe
      culpa voluptates eius quis dolor id eligendi veritatis voluptas quibusdam. Magnam? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Labore iure iste esse soluta nulla sunt, ipsum quos repellendus omnis aliquid nobis quasi doloremque error alias tempore officia, commodi optio
      deleniti! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat eum, unde quibusdam maiores deleniti minus, minima dolorum ad a
      neque inventore cumque totam quos at, ex amet molestiae autem beatae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga explicabo
      suscipit maiores eaque est iste labore omnis pariatur, qui beatae. Temporibus voluptatum eius facere ex? Delectus cum assumenda et dignissimos!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsa illum aperiam, nisi suscipit, amet perspiciatis doloremque vitae, saepe
      culpa voluptates eius quis dolor id eligendi veritatis voluptas quibusdam. Magnam? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Labore iure iste esse soluta nulla sunt, ipsum quos repellendus omnis aliquid nobis quasi doloremque error alias tempore officia, commodi optio
      deleniti! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat eum, unde quibusdam maiores deleniti minus, minima dolorum ad a
      neque inventore cumque totam quos at, ex amet molestiae autem beatae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga explicabo
      suscipit maiores eaque est iste labore omnis pariatur, qui beatae. Temporibus voluptatum eius facere ex? Delectus cum assumenda et dignissimos!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsa illum aperiam, nisi suscipit, amet perspiciatis doloremque vitae, saepe
      culpa voluptates eius quis dolor id eligendi veritatis voluptas quibusdam. Magnam? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Labore iure iste esse soluta nulla sunt, ipsum quos repellendus omnis aliquid nobis quasi doloremque error alias tempore officia, commodi optio
      deleniti! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat eum, unde quibusdam maiores deleniti minus, minima dolorum ad a
      neque inventore cumque totam quos at, ex amet molestiae autem beatae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga explicabo
      suscipit maiores eaque est iste labore omnis pariatur, qui beatae. Temporibus voluptatum eius facere ex? Delectus cum assumenda et dignissimos!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsa illum aperiam, nisi suscipit, amet perspiciatis doloremque vitae, saepe
      culpa voluptates eius quis dolor id eligendi veritatis voluptas quibusdam. Magnam? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Labore iure iste esse soluta nulla sunt, ipsum quos repellendus omnis aliquid nobis quasi doloremque error alias tempore officia, commodi optio
      deleniti! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat eum, unde quibusdam maiores deleniti minus, minima dolorum ad a
      neque inventore cumque totam quos at, ex amet molestiae autem beatae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga explicabo
      suscipit maiores eaque est iste labore omnis pariatur, qui beatae. Temporibus voluptatum eius facere ex? Delectus cum assumenda et dignissimos!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsa illum aperiam, nisi suscipit, amet perspiciatis doloremque vitae, saepe
      culpa voluptates eius quis dolor id eligendi veritatis voluptas quibusdam. Magnam? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Labore iure iste esse soluta nulla sunt, ipsum quos repellendus omnis aliquid nobis quasi doloremque error alias tempore officia, commodi optio
      deleniti! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat eum, unde quibusdam maiores deleniti minus, minima dolorum ad a
      neque inventore cumque totam quos at, ex amet molestiae autem beatae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga explicabo
      suscipit maiores eaque est iste labore omnis pariatur, qui beatae. Temporibus voluptatum eius facere ex? Delectus cum assumenda et dignissimos!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsa illum aperiam, nisi suscipit, amet perspiciatis doloremque vitae, saepe
      culpa voluptates eius quis dolor id eligendi veritatis voluptas quibusdam. Magnam? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Labore iure iste esse soluta nulla sunt, ipsum quos repellendus omnis aliquid nobis quasi doloremque error alias tempore officia, commodi optio
      deleniti! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat eum, unde quibusdam maiores deleniti minus, minima dolorum ad a
      neque inventore cumque totam quos at, ex amet molestiae autem beatae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga explicabo
      suscipit maiores eaque est iste labore omnis pariatur, qui beatae. Temporibus voluptatum eius facere ex? Delectus cum assumenda et dignissimos!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsa illum aperiam, nisi suscipit, amet perspiciatis doloremque vitae, saepe
      culpa voluptates eius quis dolor id eligendi veritatis voluptas quibusdam. Magnam? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Labore iure iste esse soluta nulla sunt, ipsum quos repellendus omnis aliquid nobis quasi doloremque error alias tempore officia, commodi optio
      deleniti! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat eum, unde quibusdam maiores deleniti minus, minima dolorum ad a
      neque inventore cumque totam quos at, ex amet molestiae autem beatae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga explicabo
      suscipit maiores eaque est iste labore omnis pariatur, qui beatae. Temporibus voluptatum eius facere ex? Delectus cum assumenda et dignissimos!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsa illum aperiam, nisi suscipit, amet perspiciatis doloremque vitae, saepe
      culpa voluptates eius quis dolor id eligendi veritatis voluptas quibusdam. Magnam? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Labore iure iste esse soluta nulla sunt, ipsum quos repellendus omnis aliquid nobis quasi doloremque error alias tempore officia, commodi optio
      deleniti! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat eum, unde quibusdam maiores deleniti minus, minima dolorum ad a
      neque inventore cumque totam quos at, ex amet molestiae autem beatae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga explicabo
      suscipit maiores eaque est iste labore omnis pariatur, qui beatae. Temporibus voluptatum eius facere ex? Delectus cum assumenda et dignissimos!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsa illum aperiam, nisi suscipit, amet perspiciatis doloremque vitae, saepe
      culpa voluptates eius quis dolor id eligendi veritatis voluptas quibusdam. Magnam? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Labore iure iste esse soluta nulla sunt, ipsum quos repellendus omnis aliquid nobis quasi doloremque error alias tempore officia, commodi optio
      deleniti! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat eum, unde quibusdam maiores deleniti minus, minima dolorum ad a
      neque inventore cumque totam quos at, ex amet molestiae autem beatae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga explicabo
      suscipit maiores eaque est iste labore omnis pariatur, qui beatae. Temporibus voluptatum eius facere ex? Delectus cum assumenda et dignissimos!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsa illum aperiam, nisi suscipit, amet perspiciatis doloremque vitae, saepe
      culpa voluptates eius quis dolor id eligendi veritatis voluptas quibusdam. Magnam? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Labore iure iste esse soluta nulla sunt, ipsum quos repellendus omnis aliquid nobis quasi doloremque error alias tempore officia, commodi optio
      deleniti! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat eum, unde quibusdam maiores deleniti minus, minima dolorum ad a
      neque inventore cumque totam quos at, ex amet molestiae autem beatae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga explicabo
      suscipit maiores eaque est iste labore omnis pariatur, qui beatae. Temporibus voluptatum eius facere ex? Delectus cum assumenda et dignissimos!
    </>
  );
};
export default App;
