import { FC } from 'react';

import { SVGProps } from '../../types/svg.types';

const PaymentReference: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 103 96"
    fill="none"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <rect x="0.5" width="102" height="96" fill="url(#pattern0)" />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlink:href="#image0_144_2758"
          transform="matrix(0.00514304 0 0 0.00546448 -0.207168 0)"
        />
      </pattern>
      <image
        id="image0_144_2758"
        width="275"
        height="183"
        xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAflBMVEX///8AAAD7+/vs7Ox2dnYSEhKXl5eLi4uhoaG0tLSkpKQEBATIyMhbW1v29vb5+fnq6urOzs4sLCyAgIDBwcFJSUm6urrd3d3k5OQXFxc9PT2KiopmZmZCQkLU1NSpqalsbGwjIyOTk5N6enpdXV04ODhRUVEgICAqKiozMzMQlOTaAAAG90lEQVR4nO2diZqiOhBGSUBEUQRBwRXFpfX9X/BSCYGw6MDc7nYIdeYbW0NwyN9JpVJZRtMQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEH+KcJI+kCzNL2e7+j8yuN8FAoC6PGTkNU6k4Kyn655JuQaUJaQXYkSm5C9l9+qIrxUnkEISQtLRuMwS13M9oTzMN0ss7OeZ2k3y1VVEYYeb0ERm/8l80naNiLrKdJAgn2QpoXJMlOOpRne4tNP/kNQz7Cz331e2vPuROQ0eLklotqQkch3sBqsjQLsRAG3ZhTuHkIHzmHqesZGyMJf77EenESW0fHTz/8D6HnjYA1Bn9zz6pE2DmYw9HiVCzLyuQiReePZ/A8++0/BNHkKIwoahP6IVZupnidR78KUuk+KtkJnrH0Zv//IP44Ov/yKv+FMroZXzTed+9V2YqmsyV/2qdMBafJColrywOoJbeOPDUyTVgyp7bRlUJo43qyBsNqehqTJIvfiywSVe4ekSSi79xL3SkUZkib6V3M92VXuHZIm2vE0byCphgYGpUlLUJM6qEkd1KQOalKBDkITZz1pTTgMTegL7/W1T6u+JlEHRWymhfqaOM8u9WSqDUETLfKNy8VoxSWGG5TX5C/6HuU16QabUkdN6qAmdVCTOgPQxJlYrWHThOprspjXvZDXrLUhaNLFjyVD8WMPXTQBp019TTTdHO/G7dhB0xmCJp1BTeqgJnVQkzqoSR1JE6VWD8v9jmW2hk2nW1m8TTUk/+TexT8xzfmDrR0+r/y1YiuHu/qxtvRacGf1RpUGVMTZaKd6YlfejmJVFKnYk+TPhsQ6FWKMzsvHhsuS6rL1VKkpXeOx6wfX4+lPQhe2/YTBWAyUxors0+jQF6e56Jg3lf2MLb1e79jSanr0uSh7NYxtJ02owYo+ByUo1dbp+5Bfi/iVg65C8+nksxnMcMT8A9VAh7W4Fpzh4kGFrYJdNEmg4ZzFToSKJpp7h8tzBQytZGPd5G3MJGH7VZZ8bym7A4KVpvgiqjlzsDWJOpqkRdq2cEs2uSR0l6WIpkS1xQpEqe5y6R8d/dijqAXRLU/bsy4Y0l3wVg4fK8t30T5uD+Y1bynOTfJki/1vAXycfKAY34rsx76b34mXqQjb3FTs2Ja58dTYQLJIpRp4udu+GxRpndLbfBEMgvMF93AXOYGHFh6k2pM1wHXPzazU77wtiCnXB+atPR12lx4XWxPSbzil+fY/9bC/RNvxDoxp4vxT6qmQcWO+I3RFPXfxJXvyTpUILGrho/pMocYbvkh9U0vPaFlPgnIna5Z6mxL+yyrUG9qtZ7uANyaVFCSy3cYvXKc5r7/x5D9H63WPtjS00RxoIU8+Jq5viCKHfgdS2vqxqccmb0OPWeL9Mq7Fp+ELN/0eHbddR53aWPlkIW2fh6vNcqVwILHfHY+8Til4vb4evNiSJs6JCFXmJQXoSCVN3gGnfYTlpMlKVKC9bFSgntiD0ATGh9UgAA2DScKia/KoD77wSxV78pZTyY2VcFclp587sitFxjvvee2kQd8rmxrokU7f82yfoqUm4KQtmy9dy848BGnN5px9oaUm7qhuZDNgJCwZFKg2PT94qm3cHiaTk6YLdCWZX8orVL9NbGtNwEycecQkuxFOfaQ8lCKNmO8vDU9/aKuJDo1nWnw+bsjWo9piYktBJKp5CjSd9nNeEAPIg0WUfST3K5//KKbBtv0fFXfQxIXCi5ValJ2lJPxYK88EXXb/J3jaz42y8mbBtbTRXJgeMOIpJJlBlr5HYzvNF8M4kMxyKzubgygjI+uhKQUbk35Zv8c6QAdN+PE5syIBHP7cM6FaCHM9fY/FAu014etNWOeTtR8j89b47QHhU+j9pwiLOes9PwhUUsiJrxe+FIn9mfLQgGgd0Pess/zOjsXilFguK+pJuGOHKD0tHnlm2hx9fnJunJ8QGqflho6Gu2vpEHjr8rnmyYPJ1XdvjcPCHa44Zho0MPhaNXGSLDC68JNk3fiLi3JOjhBxdD3m2UbWrTLF3m9YPWHHTNtCFLI13aO/IaVFsKvY9U4iC/zcXqzAC4+z2F9lqc/Zn/+5XqAXxT77hpBlJN4s2cnUtkiz5aOrC1jyrv+dcIYuCsrOEHatm1zWK5xWHiUPyWclp5luFSdU5+pcmgMJvYTXE9uHIjHD6omA/FciTrqnwTUTZckPaU67qFI9WcH55Qva74ijRNqHrialgIduLWFXQamEUbKBlcJFguNZl/nhdpgbZqBMo8kp/S8ZIq0+F0yP6hX9FU1rCqgCi1z/Dw3rk8AwNBiHetKghUMQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEE+yn8SblTW4mySpgAAAABJRU5ErkJggg=="
      />
    </defs>
  </svg>
);

export default PaymentReference;
