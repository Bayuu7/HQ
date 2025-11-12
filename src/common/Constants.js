// Constants.js — Core constants for DSRT engine
// Author: DSRT
// Version: 2025.11.0
// Description:
// Provides explicit, audit-ready constants for input, rendering, texture, shader, and system domains.

export const DSRT_REVISION = 'dsrt-2025.11.0';

// ================== INPUT ==================
export const DSRT_MOUSE = Object.freeze({
  LEFT: 0, MIDDLE: 1, RIGHT: 2,
  ROTATE: 0, DOLLY: 1, PAN: 2
});

export const DSRT_TOUCH = Object.freeze({
  ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3
});

// ================== CULLING ==================
export const DSRT_CULL_FACE = Object.freeze({
  NONE: 0, BACK: 1, FRONT: 2, FRONT_BACK: 3
});

// ================== SIDES ==================
export const DSRT_SIDE = Object.freeze({
  FRONT: 0, BACK: 1, DOUBLE: 2
});

// ================== SHADOW MAP ==================
export const DSRT_SHADOW_MAP = Object.freeze({
  BASIC: 0, PCF: 1, PCF_SOFT: 2, VSM: 3
});

// ================== BLENDING ==================
export const DSRT_BLENDING = Object.freeze({
  NONE: 0, NORMAL: 1, ADDITIVE: 2,
  SUBTRACTIVE: 3, MULTIPLY: 4, CUSTOM: 5
});

// ================== EQUATION ==================
export const DSRT_EQUATION = Object.freeze({
  ADD: 100, SUBTRACT: 101, REVERSE_SUBTRACT: 102,
  MIN: 103, MAX: 104
});

// ================== FACTOR ==================
export const DSRT_FACTOR = Object.freeze({
  ZERO: 200, ONE: 201,
  SRC_COLOR: 202, ONE_MINUS_SRC_COLOR: 203,
  SRC_ALPHA: 204, ONE_MINUS_SRC_ALPHA: 205,
  DST_ALPHA: 206, ONE_MINUS_DST_ALPHA: 207,
  DST_COLOR: 208, ONE_MINUS_DST_COLOR: 209,
  SRC_ALPHA_SATURATE: 210,
  CONSTANT_COLOR: 211, ONE_MINUS_CONSTANT_COLOR: 212,
  CONSTANT_ALPHA: 213, ONE_MINUS_CONSTANT_ALPHA: 214
});

// ================== DEPTH FUNC ==================
export const DSRT_DEPTH_FUNC = Object.freeze({
  NEVER: 0, ALWAYS: 1, LESS: 2, LESS_EQUAL: 3,
  EQUAL: 4, GREATER_EQUAL: 5, GREATER: 6, NOT_EQUAL: 7
});

// ================== TONE MAPPING ==================
export const DSRT_TONE_MAPPING = Object.freeze({
  NONE: 0, LINEAR: 1, REINHARD: 2, CINEON: 3,
  ACES_FILMIC: 4, CUSTOM: 5, AGX: 6, NEUTRAL: 7
});

// ================== MAPPING ==================
export const DSRT_MAPPING = Object.freeze({
  UV: 300, CUBE_REFLECTION: 301, CUBE_REFRACTION: 302,
  EQUIRECT_REFLECTION: 303, EQUIRECT_REFRACTION: 304,
  CUBE_UV_REFLECTION: 306
});

// ================== WRAPPING ==================
export const DSRT_WRAPPING = Object.freeze({
  REPEAT: 1000, CLAMP_TO_EDGE: 1001, MIRRORED_REPEAT: 1002
});

// ================== FILTER ==================
export const DSRT_FILTER = Object.freeze({
  NEAREST: 1003, LINEAR: 1006,
  NEAREST_MIPMAP_NEAREST: 1004, NEAREST_MIPMAP_LINEAR: 1005,
  LINEAR_MIPMAP_NEAREST: 1007, LINEAR_MIPMAP_LINEAR: 1008
});

// ================== DATA TYPE ==================
export const DSRT_DATA_TYPE = Object.freeze({
  UNSIGNED_BYTE: 1009, BYTE: 1010, SHORT: 1011, UNSIGNED_SHORT: 1012,
  INT: 1013, UNSIGNED_INT: 1014, FLOAT: 1015, HALF_FLOAT: 1016
});

// ================== FORMAT (BASIC) ==================
export const DSRT_FORMAT = Object.freeze({
  ALPHA: 1021, RGB: 1022, RGBA: 1023,
  DEPTH: 1026, DEPTH_STENCIL: 1027,
  RED: 1028, RED_INTEGER: 1029,
  RG: 1030, RG_INTEGER: 1031,
  RGB_INTEGER: 1032, RGBA_INTEGER: 1033
});

// ================== FORMAT (EXTENDED) ==================
export const DSRT_FORMAT_EXT = Object.freeze({
  LUMINANCE: 1034, LUMINANCE_ALPHA: 1035,
  DEPTH_COMPONENT16: 1036, DEPTH_COMPONENT24: 1037, DEPTH_COMPONENT32F: 1038,
  STENCIL_INDEX8: 1039, DEPTH24_STENCIL8: 1040, DEPTH32F_STENCIL8: 1041,
  RGBA16F: 1042, RGBA32F: 1043,
  RGB16F: 1044, RGB32F: 1045,
  R11F_G11F_B10F: 1046, RGB9_E5: 1047,
  SRGB8_ALPHA8: 1048, RG16F: 1049, RG32F: 1050,
  R16F: 1051, R32F: 1052
});

// ================== COMPRESSED FORMAT ==================
export const DSRT_COMPRESSED_FORMAT = Object.freeze({
  COMPRESSED_RGB_S3TC_DXT1: 2000,
  COMPRESSED_RGBA_S3TC_DXT1: 2001,
  COMPRESSED_RGBA_S3TC_DXT3: 2002,
  COMPRESSED_RGBA_S3TC_DXT5: 2003,
  COMPRESSED_RGB_ETC1: 2004,
  COMPRESSED_RGB8_ETC2: 2005,
  COMPRESSED_RGBA8_ETC2_EAC: 2006,
  COMPRESSED_RGB_PVRTC_4BPPV1: 2007,
  COMPRESSED_RGBA_PVRTC_4BPPV1: 2008,
  COMPRESSED_RGBA_ASTC_4x4: 2009,
  COMPRESSED_RGBA_ASTC_8x8: 2010
});

// ================== DRAW MODE ==================
export const DSRT_DRAW_MODE = Object.freeze({
  TRIANGLES: 0, TRIANGLE_STRIP: 1, TRIANGLE_FAN: 2
});

// ================== DEPTH PACKING ==================
export const DSRT_DEPTH_PACKING = Object.freeze({
  BASIC: 3200, RGBA: 3201, RGB: 3202, RG: 3203
});

// ================== NORMAL MAP ==================
export const DSRT_NORMAL_MAP = Object.freeze({
  TANGENT_SPACE: 0, OBJECT_SPACE: 1
});

// ================== COLOR SPACE ==================
export const DSRT_COLOR_SPACE = Object.freeze({
  NONE: '', SRGB: 'srgb', LINEAR_SRGB: 'srgb-linear'
});

// ================== SHADER VERSION ==================
export const DSRT_GLSL_VERSION = Object.freeze({
  V1: '100', V3: '300 es'
});

// ================== COORDINATE SYSTEM ==================
export const DSRT_COORDINATE_SYSTEM = Object.freeze({
  WEBGL: 2000, WEBGPU: 2001
});

// ================== TIMESTAMP QUERY ==================
export const DSRT_TIMESTAMP_QUERY = Object.freeze({
  COMPUTE: 'compute', RENDER: 'render'
});

// ================== INTERPOLATION SAMPLING ==================
export const DSRT_INTERPOLATION_SAMPLING_TYPE = Object.freeze({
  PERSPECTIVE: 'perspective', LINEAR: 'linear', FLAT: 'flat'
});

export const DSRT_INTERPOLATION_SAMPLING_MODE = Object.freeze({
  NORMAL: 'normal', CENTROID: 'centroid', SAMPLE: 'sample',
  FIRST: 'first', EITHER: 'either'
});
