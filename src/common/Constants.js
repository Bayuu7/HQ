// Constants.js — Core + Extended constants for DSRT engine
// Author: DSRT
// Version: 2025.11.0
// Description:
// Provides explicit, audit-ready constants for input, rendering, texture, shader, system, color, lighting, material, geometry, animation, UI, IO.

export const DSRT_REVISION = 'dsrt-2025.11.0';

// ================== INPUT ==================
export const DSRT_MOUSE = Object.freeze({
  LEFT: 0, MIDDLE: 1, RIGHT: 2,
  ROTATE: 0, DOLLY: 1, PAN: 2
});
export const DSRT_MOUSE_EXT = Object.freeze({
  BACK: 3, FORWARD: 4, EXTRA: 5
});

export const DSRT_TOUCH = Object.freeze({
  ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3
});
export const DSRT_TOUCH_EXT = Object.freeze({
  PINCH: 4, SWIPE: 5, TAP: 6, LONG_PRESS: 7
});

// ================== CULLING ==================
export const DSRT_CULL_FACE = Object.freeze({
  NONE: 0, BACK: 1, FRONT: 2, FRONT_BACK: 3
});
export const DSRT_CULL_FACE_EXT = Object.freeze({
  CUSTOM: 4, FRONT_INVERTED: 5, BACK_INVERTED: 6
});

// ================== SIDES ==================
export const DSRT_SIDE = Object.freeze({
  FRONT: 0, BACK: 1, DOUBLE: 2
});
export const DSRT_SIDE_EXT = Object.freeze({
  INSIDE: 3, OUTSIDE: 4
});

// ================== SHADOW MAP ==================
export const DSRT_SHADOW_MAP = Object.freeze({
  BASIC: 0, PCF: 1, PCF_SOFT: 2, VSM: 3
});
export const DSRT_SHADOW_MAP_EXT = Object.freeze({
  EVSM: 4, MOMENT: 5, RSM: 6
});

// ================== BLENDING ==================
export const DSRT_BLENDING = Object.freeze({
  NONE: 0, NORMAL: 1, ADDITIVE: 2,
  SUBTRACTIVE: 3, MULTIPLY: 4, CUSTOM: 5
});
export const DSRT_BLENDING_EXT = Object.freeze({
  SCREEN: 6, OVERLAY: 7, DARKEN: 8, LIGHTEN: 9
});

// ================== EQUATION ==================
export const DSRT_EQUATION = Object.freeze({
  ADD: 100, SUBTRACT: 101, REVERSE_SUBTRACT: 102,
  MIN: 103, MAX: 104
});
export const DSRT_EQUATION_EXT = Object.freeze({
  LOGICAL_AND: 105, LOGICAL_OR: 106, XOR: 107
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
export const DSRT_FACTOR_EXT = Object.freeze({
  SRC1_COLOR: 215, ONE_MINUS_SRC1_COLOR: 216,
  SRC1_ALPHA: 217, ONE_MINUS_SRC1_ALPHA: 218
});

// ================== DEPTH FUNC ==================
export const DSRT_DEPTH_FUNC = Object.freeze({
  NEVER: 0, ALWAYS: 1, LESS: 2, LESS_EQUAL: 3,
  EQUAL: 4, GREATER_EQUAL: 5, GREATER: 6, NOT_EQUAL: 7
});
export const DSRT_DEPTH_FUNC_EXT = Object.freeze({
  NEVER_PASS: 8, ALWAYS_PASS: 9, CUSTOM: 10
});

// ================== TONE MAPPING ==================
export const DSRT_TONE_MAPPING = Object.freeze({
  NONE: 0, LINEAR: 1, REINHARD: 2, CINEON: 3,
  ACES_FILMIC: 4, CUSTOM: 5, AGX: 6, NEUTRAL: 7
});
export const DSRT_TONE_MAPPING_EXT = Object.freeze({
  FILMIC_HYBRID: 8, HDR_LOG: 9, CUSTOM_CURVE: 10
});

// ================== MAPPING ==================
export const DSRT_MAPPING = Object.freeze({
  UV: 300, CUBE_REFLECTION: 301, CUBE_REFRACTION: 302,
  EQUIRECT_REFLECTION: 303, EQUIRECT_REFRACTION: 304,
  CUBE_UV_REFLECTION: 306
});
export const DSRT_MAPPING_EXT = Object.freeze({
  SPHERICAL: 307, PLANAR: 308, TRIPLANAR: 309
});

// ================== WRAPPING ==================
export const DSRT_WRAPPING = Object.freeze({
  REPEAT: 1000, CLAMP_TO_EDGE: 1001, MIRRORED_REPEAT: 1002
});
export const DSRT_WRAPPING_EXT = Object.freeze({
  CLAMP_TO_BORDER: 1003, MIRROR_CLAMP_TO_EDGE: 1004
});

// ================== FILTER ==================
export const DSRT_FILTER = Object.freeze({
  NEAREST: 1003, LINEAR: 1006,
  NEAREST_MIPMAP_NEAREST: 1004, NEAREST_MIPMAP_LINEAR: 1005,
  LINEAR_MIPMAP_NEAREST: 1007, LINEAR_MIPMAP_LINEAR: 1008
});
export const DSRT_FILTER_EXT = Object.freeze({
  ANISOTROPIC: 1009, CUBIC: 1010
});

// ================== DATA TYPE ==================
export const DSRT_DATA_TYPE = Object.freeze({
  UNSIGNED_BYTE: 1011, BYTE: 1012, SHORT: 1013, UNSIGNED_SHORT: 1014,
  INT: 1015, UNSIGNED_INT: 1016, FLOAT: 1017, HALF_FLOAT: 1018
});
export const DSRT_DATA_TYPE_EXT = Object.freeze({
  DOUBLE: 1019, UNSIGNED_LONG: 1020
});

// ================== FORMAT (BASIC + EXTENDED + COMPRESSED) ==================
export const DSRT_FORMAT = Object.freeze({
  ALPHA: 1021, RGB: 1022, RGBA: 1023,
  DEPTH: 1026, DEPTH_STENCIL: 1027,
  RED: 1028, RED_INTEGER: 1029,
  RG: 1030, RG_INTEGER: 1031,
  RGB_INTEGER: 1032, RGBA_INTEGER: 1033
});
export const DSRT_FORMAT_EXT = Object.freeze({
  LUMINANCE: 1034, LUMINANCE_ALPHA: 1035,
  DEPTH_COMPONENT16: 1036, DEPTH_COMPONENT24: 1037, DEPTH_COMPONENT32F: 1038,
  STENCIL_INDEX8: 1039, DEPTH24_STENCIL8: 1040, DEPTH32F_STENCIL8: 1041,
  RGBA16F: 1042, RGBA32F: 1043, RGB16F: 1044, RGB32F: 1045,
  R11F_G11F_B10F: 1046, RGB9_E5: 1047,
  SRGB8_ALPHA8: 1048, RG16F: 1049, RG32F: 1050,
  R16F: 1051, R32F: 1052
});
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
export const DSRT_DRAW_MODE_EXT = Object.freeze({
  LINES: 3, LINE_STRIP: 4, LINE_LOOP: 5,
  POINTS: 6, PATCHES: 7
});

// ================== DEPTH PACKING ==================
export const DSRT_DEPTH_PACKING = Object.freeze({
  BASIC: 3200, RGBA: 3201, RGB: 3202, RG: 3203
});
export const DSRT_DEPTH_PACKING_EXT = Object.freeze({
  DEPTH24: 3204, DEPTH32: 3205, DEPTH32F: 3206
});

// ================== NORMAL MAP ==================
export const DSRT_NORMAL_MAP = Object.freeze({
  TANGENT_SPACE: 0, OBJECT_SPACE: 1
});
export const DSRT_NORMAL_MAP_EXT = Object.freeze({
  WORLD_SPACE: 2, SCREEN_SPACE: 3
});

// ================== COLOR SPACE ==================
export const DSRT_COLOR_SPACE = Object.freeze({
  NONE: '', SRGB: 'srgb', LINEAR_SRGB: 'srgb-linear'
});
export const DSRT_COLOR_SPACE_EXT = Object.freeze({
  DISPLAY_P3: 'display-p3', REC2020: 'rec2020', HDR10: 'hdr10'
});

// ================== SHADER VERSION ==================
export const DSRT_GLSL_VERSION = Object.freeze({
  V1: '100', V3: '300 es'
});
export const DSRT_GLSL_VERSION_EXT = Object.freeze({
  V4: '450', WGSL: 'wgsl'
});

// ================== COORDINATE SYSTEM ==================
export const DSRT_COORDINATE_SYSTEM = Object.freeze({
  WEBGL: 2000, WEBGPU: 2001
});
export const DSRT_COORDINATE_SYSTEM_EXT = Object.freeze({
  VULKAN: 2002, DIRECTX: 2003, METAL: 2004
});

// ================== TIMESTAMP QUERY ==================
export const DSRT_TIMESTAMP_QUERY = Object.freeze({
  COMPUTE: 'compute', RENDER: 'render'
});
export const DSRT_TIMESTAMP_QUERY_EXT = Object.freeze({
  TRANSFER: 'transfer', MEMORY: 'memory', CUSTOM: 'custom'
});

// ================== INTERPOLATION SAMPLING ==================
export const DSRT_INTERPOLATION_SAMPLING_TYPE = Object.freeze({
  PERSPECTIVE: 'perspective', LINEAR: 'linear', FLAT: 'flat'
});
export const DSRT_INTERPOLATION_SAMPLING_TYPE_EXT = Object.freeze({
  CUBIC: 'cubic', QUADRATIC: 'quadratic'
});

export const DSRT_INTERPOLATION_SAMPLING_MODE = Object.freeze({
  NORMAL: 'normal', CENTROID: 'centroid', SAMPLE: 'sample',
  FIRST: 'first', EITHER: 'either'
});
export const DSRT_INTERPOLATION_SAMPLING_MODE_EXT = Object.freeze({
  LAST: 'last', RANDOM: 'random', CUSTOM: 'custom'
});

// ================== COLOR (BASIC) ==================
export const DSRT_COLOR = Object.freeze({
  BLACK: 0x000000, WHITE: 0xFFFFFF,
  RED: 0xFF0000, GREEN: 0x00FF00, BLUE: 0x0000FF,
  CYAN: 0x00FFFF, MAGENTA: 0xFF00FF, YELLOW: 0xFFFF00,
  GRAY: 0x808080
});

// ================== COLOR (EXTENDED) ==================
export const DSRT_COLOR_EXT = Object.freeze({
  ORANGE: 0xFFA500, PURPLE: 0x800080, PINK: 0xFFC0CB,
  BROWN: 0x8B4513, LIME: 0x32CD32, NAVY: 0x000080,
  TEAL: 0x008080, OLIVE: 0x808000, MAROON: 0x800000,
  GOLD: 0xFFD700, SILVER: 0xC0C0C0
});

// ================== COLOR (UI) ==================
export const DSRT_COLOR_UI = Object.freeze({
  PRIMARY: 0x1976D2, SECONDARY: 0x9C27B0,
  SUCCESS: 0x4CAF50, WARNING: 0xFFC107,
  ERROR: 0xF44336, INFO: 0x2196F3,
  BACKGROUND: 0x121212, SURFACE: 0x1E1E1E
});

// ================== COLOR (3D DEBUG) ==================
export const DSRT_COLOR_DEBUG = Object.freeze({
  AXIS_X: 0xFF0000, AXIS_Y: 0x00FF00, AXIS_Z: 0x0000FF,
  GRID: 0x888888, LIGHT: 0xFFFFAA, SHADOW: 0x222222
});

// ================== COLOR (IO / LOGGING) ==================
export const DSRT_COLOR_IO = Object.freeze({
  INPUT: 0x00BCD4, OUTPUT: 0x8BC34A, AUDIT: 0xFF5722,
  TRACE: 0x9E9E9E, DEBUG: 0x03A9F4,
  ERROR: 0xE91E63, WARNING: 0xFF9800
});

// ================== LIGHTING ==================
export const DSRT_LIGHT = Object.freeze({
  AMBIENT: 0,
  DIRECTIONAL: 1,
  POINT: 2,
  SPOT: 3,
  HEMISPHERE: 4
});
export const DSRT_LIGHT_EXT = Object.freeze({
  AREA: 5,
  RECT: 6,
  VOLUMETRIC: 7
});

// ================== MATERIAL ==================
export const DSRT_MATERIAL = Object.freeze({
  BASIC: 0,
  LAMBERT: 1,
  PHONG: 2,
  STANDARD: 3,
  TOON: 4,
  PBR: 5,
  UNLIT: 6
});
export const DSRT_MATERIAL_EXT = Object.freeze({
  WIREFRAME: 7,
  DEPTH: 8,
  NORMAL: 9,
  CUSTOM: 10
});

// ================== GEOMETRY / PRIMITIVES ==================
export const DSRT_GEOMETRY = Object.freeze({
  BOX: 0,
  SPHERE: 1,
  PLANE: 2,
  CYLINDER: 3,
  TORUS: 4,
  CONE: 5
});
export const DSRT_GEOMETRY_EXT = Object.freeze({
  PYRAMID: 6,
  CAPSULE: 7,
  ICOSAHEDRON: 8,
  OCTAHEDRON: 9,
  CUSTOM: 10
});

// ================== ANIMATION / EASING ==================
export const DSRT_EASING = Object.freeze({
  LINEAR: 0,
  EASE_IN: 1,
  EASE_OUT: 2,
  EASE_IN_OUT: 3
});
export const DSRT_EASING_EXT = Object.freeze({
  BOUNCE: 4,
  ELASTIC: 5,
  BACK: 6,
  CUBIC: 7,
  QUADRATIC: 8
});

// ================== UI LAYOUT ==================
export const DSRT_UI_LAYOUT = Object.freeze({
  FLEX: 0,
  GRID: 1,
  ABSOLUTE: 2,
  RELATIVE: 3
});
export const DSRT_UI_LAYOUT_EXT = Object.freeze({
  STACK: 4,
  DOCK: 5,
  OVERLAY: 6
});

// ================== IO FILE TYPE ==================
export const DSRT_FILE_TYPE = Object.freeze({
  JSON: 'json',
  XML: 'xml',
  GLTF: 'gltf',
  OBJ: 'obj',
  FBX: 'fbx',
  PNG: 'png',
  JPG: 'jpg'
});
export const DSRT_FILE_TYPE_EXT = Object.freeze({
  SVG: 'svg',
  HDR: 'hdr',
  EXR: 'exr',
  MP4: 'mp4',
  WEBM: 'webm'
});

// ================== STATUS CODE ==================
export const DSRT_STATUS = Object.freeze({
  OK: 200,
  FAIL: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 408,
  SERVER_ERROR: 500
});
export const DSRT_STATUS_EXT = Object.freeze({
  PENDING: 100,
  PROCESSING: 102,
  RETRY: 429,
  CUSTOM: 999
});

