// You can write your own logic here to determine the actual url
window.contentManagementUrl = "http://localhost:3002"
window.analyticsUrl = "http://localhost:3003"

// Use dynamic import here to allow webpack to interface with module federation code
import("./bootstrap");
