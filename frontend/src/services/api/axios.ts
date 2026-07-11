import axios from "axios";
import { API_CONFIG } from "@/config/api";

export const apiClient = axios.create(API_CONFIG);
