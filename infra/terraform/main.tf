# main.tf
# Terraform config for cloud infrastructure

provider "aws" {
  region = "us-east-1"
}

resource "aws_ecs_cluster" "ai_cluster" {
  name = "ai-3d-cluster"
}

resource "aws_ecs_task_definition" "ai_task" {
  family                   = "ai-3d-task"
  requires_compatibilities = ["FARGATE"]
  network_mode             = "awsvpc"
  cpu                      = "1024"
  memory                   = "2048"
  container_definitions    = <<DEFINITION
[
  {
    "name": "ai-3d-system",
    "image": "ai-3d-system:latest",
    "essential": true,
    "portMappings": [
      {
        "containerPort": 5000,
        "hostPort": 5000
      }
    ]
  }
]
DEFINITION
}
