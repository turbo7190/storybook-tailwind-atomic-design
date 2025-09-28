<template>
  <span
    v-if="element === 'span'"
    :class="`text-${size} text-${color} text-${align} ${transform} ${decoration} font-${weight} ${customClass}`"
  >
    {{ content }}
  </span>
  <div
    v-else
    :class="`text-${size} text-${color} text-${align} ${transform} ${decoration} font-${weight} ${customClass}`"
  >
    {{ content }}
  </div>
</template>

<script>
/**
- Use Text element for each text in application from headings to paragraphs
- options to customize size,color, content,alignment,transformation, decoration
**/

export default {
  name: "Text",
  props: {
    /**
    sets size of text from xs to 9xl. Default is base
    */
    size: {
      type: String,
      default: "",
    },
    /**
    sets color of text.
    */
    color: {
      type: String,
      default: "",
    },
    /**
    sets content of text.
    */
    content: {
      type: String,
      default: "",
    },
    /**
    sets alignment of text i.e. left,right,center
    */
    align: {
      type: String,
      default: "",
    },
    /**
    sets tranformation options of text i.e. uppercase, lowercase etc.
    */
    transform: {
      type: String,
      default: "",
    },
    /**
    sets decoration options of text i.e. underline, strikethrough etc.
    */
    decoration: {
      type: String,
      default: "",
    },
    /**
    used to add additional classes to text like letter spacing
    */
    customClass: {
      type: String,
      default: "",
    },
    /**
    sets font weight.
    */
    weight: {
      type: String,
      default: "medium",
    },
    /**
     * switch between span and div. default is set to div
     */
    element: {
      type: String,
      default: "div",
    },
  },
};
</script>
